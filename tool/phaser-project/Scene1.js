class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    // this.load.image('background', 'assets/images/back.png');
    this.load.image('platform', 'assets/images/platform.png');
    this.load.spritesheet('dude', 'assets/spritesheets/dude.png',{
         frameWidth: 32,
         frameHeight: 48
    });
  }

  create() {
    var player = this.physics.add.sprite(200, 375, 'dude');
    player.setBounce(0.5);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(100);
    this.physics.world.createDebugGraphic();
    cursors = this.input.keyboard.createCursorKeys();


    var jumpPad;
    // const back = this.add.image(800, 300, 'background');
    const pad = this.physics.add.staticImage(200, 600, 'platform').setScale(0.15).refreshBody();

    jumpPad = this.physics.add.staticGroup();

    jumpPad.create(700, 100, 'platform').setScale(0.15).refreshBody();
    jumpPad.create(500, 300, 'platform').setScale(0.15).refreshBody();

    this.physics.add.collider(player, pad);

    // back.scale = 2.8;
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

  }
  update () {
    if (cursors.left.isDown)
    {
      player.setVelocityX(-160);

      player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
      player.setVelocityX(160);

      player.anims.play('right', true);
    }
    else
    {
      player.setVelocityX(0);

      player.anims.play('turn');
    }

    if (cursors.up.isDown) // && player.body.touching.down)
    {
      player.setVelocityY(-330);
    }

}
}



