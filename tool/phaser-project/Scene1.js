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
    const pad = this.physics.add.staticImage(150, 670, 'platform').setDisplaySize(175, 60).refreshBody(); // bottom
    const jumpPad = this.physics.add.staticGroup();
    jumpPad.create(700, 100, 'platform').setDisplaySize(175, 60).refreshBody(); // mid
    jumpPad.create(500, 300, 'platform').setDisplaySize(175, 60).refreshBody(); // top
    jumpPad.create(600, 600, 'platform').setDisplaySize(175, 60).refreshBody(); // bottom mid


    // Create player sprite
    var player = this.physics.add.sprite(250, 375, 'dude');
    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(200);

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
    // player movement
    const player = this.player;
    if (this.cursors.left.isDown) {
      player.setVelocityX(-150); // Move left
      player.anims.play('left', true); // Plays left animation
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(150); // Move right
      player.anims.play('right', true); // Plays right animation
    } else {
      player.setVelocityX(0); // Stop moving X-axis
      player.anims.play('turn', true); // Play idle animation
    }
    if (this.cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330); // Jumps
    }
  }
}

