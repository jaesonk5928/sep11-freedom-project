// class Scene1 extends Phaser.Scene {
//   constructor() {
//     super("bootGame");
//   }

//   preload(){
//     this.load.image('platform', 'assets/images/platform.png');
//     this.load.spritesheet('dude', 'assets/spritesheets/dude.png',{
//          frameWidth: 32,
//          frameHeight: 48
//     });
//     this.load.image('background', 'assets/images/back.png');
//   }

//   create() {
//     var player = this.physics.add.sprite(200, 375, 'dude');
//     player.setBounce(0.3);
//     player.setCollideWorldBounds(true);
//     player.body.setGravityY(100);
//     this.physics.world.createDebugGraphic();
//     this.cursors = this.input.keyboard.createCursorKeys();


//     var jumpPad;
//     const back = this.add.image(800, 300, 'background');
//     const pad = this.physics.add.staticImage(150, 670, 'platform').setDisplaySize(300, 50).refreshBody(); // bottom

//     jumpPad = this.physics.add.staticGroup();

//     jumpPad.create(700, 100, 'platform').setDisplaySize(300, 50).refreshBody(); // mid
//     jumpPad.create(500, 300, 'platform').setDisplaySize(300, 50).refreshBody(); // top

//     this.physics.add.collider(player, pad);
//     player.setDepth(1);

//     back.scale = 2.8;
//     this.anims.create({
//         key: 'left',
//         frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//         frameRate: 10,
//         repeat: -1
//     });

//     this.anims.create({
//         key: 'turn',
//         frames: [ { key: 'dude', frame: 4 } ],
//         frameRate: 20
//     });

//     this.anims.create({
//         key: 'right',
//         frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//         frameRate: 10,
//         repeat: -1
//     });

//   }
//   update () {
//     // if (cursors.left.isDown)
//     // {
//     //   player.setVelocityX(-160);

//     //   player.anims.play('left', true);
//     // }
//     // else if (cursors.right.isDown)
//     // {
//     //   player.setVelocityX(160);

//     //   player.anims.play('right', true);
//     // }
//     // else
//     // {
//     //   player.setVelocityX(0);

//     //   player.anims.play('turn');
//     // }

//     // if (cursors.up.isDown) // && player.body.touching.down)
//     // {
//     //   player.setVelocityY(-330);
//     // }

// }
// }

class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image('background', 'assets/images/back.png');
    this.load.image('platform', 'assets/images/platform.png');
    this.load.spritesheet('dude', 'assets/spritesheets/dude.png', {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  create() {
    // Background first, scale it and ensure it stays behind
    const back = this.add.image(800, 300, 'background');
    back.scale = 2.8;
    back.setDepth(-1);  // Set depth to make sure the background stays behind other elements

    // Create platforms
    const pad = this.physics.add.staticImage(150, 670, 'platform').setDisplaySize(300, 50).refreshBody(); // bottom
    const jumpPad = this.physics.add.staticGroup();
    jumpPad.create(700, 100, 'platform').setDisplaySize(300, 50).refreshBody(); // mid
    jumpPad.create(500, 300, 'platform').setDisplaySize(300, 50).refreshBody(); // top

    // Create player sprite
    var player = this.physics.add.sprite(100, 375, 'dude');
    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);

    // Set up player animation
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

    // Make sure player sprite is on top of other elements
    player.setDepth(1);  // Ensure player is drawn on top of background

    // Set collision for player and platforms
    this.physics.add.collider(player, pad);
    this.physics.add.collider(player, jumpPad);

    // Create debug graphics for collision
    this.physics.world.createDebugGraphic();

    // Set up cursor keys for player movement
    this.cursors = this.input.keyboard.createCursorKeys();

    // Store the player object as part of the scene for later use in update
    this.player = player;
  }

  update() {
    // Handle player movement
    const player = this.player;

    if (this.cursors.left.isDown) {
      player.setVelocityX(-160); // Move left
      player.anims.play('left', true); // Play left animation
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(160); // Move right
      player.anims.play('right', true); // Play right animation
    } else {
      player.setVelocityX(0); // Stop moving horizontally
      player.anims.play('turn', true); // Play idle animation
    }

    if (this.cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330); // Jump
    }
  }
}

