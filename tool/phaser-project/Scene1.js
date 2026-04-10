class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
    this.powerUps = [];
  }

  preload() {
    this.load.image('background', 'assets/images/back.png');
    this.load.image('platform', 'assets/images/platform.png');
    this.load.image('powerUp', 'assets/images/power.png');
    this.load.image('alert', 'assets/images/fire.png');

    this.load.spritesheet('dude', 'assets/spritesheets/dude.png', {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  create() {
    // Background
    const back = this.add.image(800, 300, 'background');
    back.setScale(3);
    back.setDepth(-1);
    let randomX = Phaser.Math.Between(50, 550);
    let randomY = Phaser.Math.Between(20, 400);
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#000'
    });

    // Platforms
    const pad = this.physics.add.staticImage(175, 670, 'platform') // starter platform
      .setDisplaySize(160, 50)
      .refreshBody();

    const jumpPad = this.physics.add.staticGroup();
    jumpPad.create(825, 450, 'platform').setDisplaySize(160, 50).refreshBody(); // bottom
    jumpPad.create(550, 280, 'platform').setDisplaySize(160, 50).refreshBody(); // mid
    jumpPad.create(500, 600, 'platform').setDisplaySize(160, 50).refreshBody(); // top
    jumpPad.create(randomX, randomY, 'platform').setDisplaySize(160, 50).refreshBody(); // random platform

    // Player
    const player = this.physics.add.sprite(180, 575, 'dude');
    player.setBounce(0.3);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(100);
    player.setDepth(1);

    // Animations
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    // Collisions (player + platforms)
    this.physics.add.collider(player, pad);
    this.physics.add.collider(player, jumpPad);

    this.powerUpGroup = this.physics.add.group({
      key: 'powerUp',
      repeat: 50,
      setXY: { x: 300, y: 800, stepX: 200 }
    });

    this.powerUpGroup.getChildren().forEach(powerUp => {
      powerUp.setPosition(
        Phaser.Math.Between(100, 900),
        Phaser.Math.Between(200, 600)
      );
      powerUp.setBounce(0.2);
      powerUp.setCollideWorldBounds(true);
      powerUp.body.setGravityY(200);
      powerUp.setScale(0.05);
    });

    this.physics.add.collider(this.powerUpGroup, jumpPad);
    this.physics.add.collider(this.powerUpGroup, pad);

    this.physics.add.overlap(
      player,
      this.powerUpGroup,
      this.collectPowerUp,
      null,
      this
    );

    this.fires = this.physics.add.group();

    for (let i = 0; i < 4; i++) {
      const fire = this.fires.create(
        Phaser.Math.Between(100, 900),
        Phaser.Math.Between(0, 700),
        'alert'
      );

      fire.setBounce(1.001);
      fire.setCollideWorldBounds(true);
      fire.setVelocity(
        Phaser.Math.Between(-200, 600),
        Phaser.Math.Between(20, 300)
      );
      fire.setScale(0.1);
    }

    // Fire collisions
    this.physics.add.collider(this.fires, pad);
    this.physics.add.collider(this.fires, jumpPad);

    // Player hits fire
    this.physics.add.collider(
      player,
      this.fires,
      this.hitFire,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = player;
    // this.physics.world.createDebugGraphic();
  }

  update() {
    const player = this.player;

    if (this.cursors.left.isDown) {
      player.setVelocityX(-150);
      player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(150);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }

    if (this.cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-380);
    }
  }

  // Collect power-up
  collectPowerUp(player, powerUp) {
    powerUp.setVisible(false);
    powerUp.setActive(false);

    this.score += 1.5;
    this.scoreText.setText('Score: ' + this.score);

    this.time.delayedCall(8000, () => {
      powerUp.setVisible(true);
      powerUp.setActive(true);
      powerUp.setPosition(
      Phaser.Math.Between(50, 800),
      Phaser.Math.Between(300, 800)
      );
    });
  }

  hitFire(player, fire) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
  }
}
