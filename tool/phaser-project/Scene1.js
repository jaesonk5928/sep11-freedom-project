class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image('background', 'assets/images/back.png');
    this.load.image('platform', 'assets/images/platform.png');
    this.load.image('powerUp', 'assets/images/power.png');
    this.load.spritesheet('dude', 'assets/spritesheets/dude.png', {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  create() {
    // background first
    const back = this.add.image(800, 300, 'background');
    back.scale = 2.8;
    back.setDepth(-1); // background stays behind other elements

    // Create platforms (static objects)
    const pad = this.physics.add.staticImage(150, 670, 'platform').setDisplaySize(175, 60).refreshBody(); // bottom
    const jumpPad = this.physics.add.staticGroup();
    jumpPad.create(700, 100, 'platform').setDisplaySize(175, 60).refreshBody(); // mid
    jumpPad.create(500, 300, 'platform').setDisplaySize(175, 60).refreshBody(); // top
    jumpPad.create(500, 600, 'platform').setDisplaySize(175, 60).refreshBody(); // bottom mid

    // Creates player sprite
    var player = this.physics.add.sprite(150, 575, 'dude');
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

    player.setDepth(1);

    // Set collision player and platforms
    this.physics.add.collider(player, pad);
    this.physics.add.collider(player, jumpPad); // Add collision with all platforms

    // Creates power-up object
    this.powerUp = this.physics.add.image(500, 500, 'powerUp').setScale(0.05);
    this.powerUp.setBounce(0.1); // little power bounce
    this.powerUp.setCollideWorldBounds(true); // Keep the power-up inside
    this.powerUp.body.setGravityY(300); // Applys gravity

    // Adds collision for power-up and platforms
    this.physics.add.collider(this.powerUp, jumpPad); // Make sure the power-up collides with all platforms

    this.physics.world.createDebugGraphic();

    // Set up cursor keys for player movement
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.overlap(player, this.powerUp, this.collectPowerUp, null, this);

    // Store the player object as part of the scene for later use in update
    this.player = player;
  }

  update() {
    const player = this.player;

    // player movement
    if (this.cursors.left.isDown) {
      player.setVelocityX(-120); // Move left
      player.anims.play('left', true); // Plays left animation
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(120); // Move right
      player.anims.play('right', true); // Plays right animation
    } else {
      player.setVelocityX(0); // Stop moving X-axis
      player.anims.play('turn', true); // Play idle animation
    }

    if (this.cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-480); // Jumps
    }
  }

  // Power-up collection function
  collectPowerUp(player, powerUp) {
    // Remove the power-up from the game world
    powerUp.setVisible(false);
    powerUp.setActive(false);

    // Boosts the player's speed
    player.setVelocityY(600); // Temporarily increase speed to 400

    this.time.delayedCall(3000, () => {
      powerUp.setVisible(true);
      powerUp.setActive(true);
      powerUp.setPosition(500, 500); // Reset position (or change to a new location)
    });
  }
}
