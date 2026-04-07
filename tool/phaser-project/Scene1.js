// class Scene1 extends Phaser.Scene {
//   constructor() {
//     super("bootGame");
//     this.powerUps = [];  // Array to store power-ups
//   }

//   preload() {
//     this.load.image('background', 'assets/images/back.png');
//     this.load.image('platform', 'assets/images/platform.png');
//     this.load.image('powerUp', 'assets/images/power.png');
//     this.load.image('alert', 'assets/images/fire.png');
//     this.load.spritesheet('dude', 'assets/spritesheets/dude.png', {
//       frameWidth: 32,
//       frameHeight: 48
//     });
//   }

//   create() {
//     // Background first, scale it and ensure it stays behind
//     const back = this.add.image(800, 300, 'background');
//     back.scale = 3;
//     back.setDepth(-1);  // Sets depth to make sure the background stays behind other elements

//     var score = 0;
//     var scoreText;
//     scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

//     // Create platforms
//     const pad = this.physics.add.staticImage(175, 670, 'platform').setDisplaySize(135, 60).refreshBody(); // bottom
//     const jumpPad = this.physics.add.staticGroup();
//     jumpPad.create(900, 450, 'platform').setDisplaySize(135, 60).refreshBody(); // mid
//     jumpPad.create(600, 300, 'platform').setDisplaySize(135, 60).refreshBody(); // top
//     jumpPad.create(500, 600, 'platform').setDisplaySize(135, 60).refreshBody(); // bottom mid

//     // Create player sprite
//     var player = this.physics.add.sprite(180, 575, 'dude');
//     player.setBounce(0.2);
//     player.setCollideWorldBounds(true);
//     player.body.setGravityY(150);

//     // Set up player animation
//     this.anims.create({
//       key: 'left',
//       frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'turn',
//       frames: [{ key: 'dude', frame: 4 }],
//       frameRate: 20
//     });

//     this.anims.create({
//       key: 'right',
//       frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     // the player sprite is on top of other elements
//     player.setDepth(1);

//     // Set collision for player and platforms
//     this.physics.add.collider(player, pad);
//     this.physics.add.collider(player, jumpPad); // Add collision with all platforms in the group

//     // Create power-ups group (physics-enabled group)
//     this.powerUpGroup = this.physics.add.group({
//       key: 'powerUp',
//       repeat: 30,  // Set number of power-ups to spawn
//       setXY: { x: 300, y: 800, stepX: 200 }  // Set initial positions for power-ups
//     });

//     // Loop through each power-up and apply random positioning
//       this.powerUpGroup.getChildren().forEach(powerUp => {
//       powerUp.setPosition(Phaser.Math.Between(100, 900), Phaser.Math.Between(200, 600));

//       // Make power-up physics-enabled
//       powerUp.setBounce(0.2);
//       powerUp.setCollideWorldBounds(true);
//       powerUp.body.setGravityY(200);
//       powerUp.setScale(0.05);
//     });




//     // Add collision for power-ups and platforms
//     this.physics.add.collider(this.powerUpGroup, jumpPad);
//     this.physics.add.collider(this.powerUpGroup, pad);
//     this.physics.add.collider(bombs, platforms);


//     this.physics.world.createDebugGraphic();

//     this.cursors = this.input.keyboard.createCursorKeys();

//     // Create overlap between player and power-up group
//     this.physics.add.overlap(player, this.powerUpGroup, this.collectPowerUp, null, this);
//     this.physics.add.collider(player, bombs, hitBomb, null, this);

//     this.player = player;
//   }

//   update() {
//     const player = this.player;

//     // player movement
//     if (this.cursors.left.isDown) {
//       player.setVelocityX(-180); // Move left
//       player.anims.play('left', true); // Plays left animation
//     } else if (this.cursors.right.isDown) {
//       player.setVelocityX(180); // Move right
//       player.anims.play('right', true); // Plays right animation
//     } else {
//       player.setVelocityX(0); // Stop moving X-axis
//       player.anims.play('turn', true); // Play idle animation
//     }

//     if (this.cursors.up.isDown && player.body.touching.down) {
//       player.setVelocityY(-420); // Jumps
//     }
//   }

//   // Power-up collection function
//     collectPowerUp(player, powerUp) {
//        powerUp.setVisible(false);
//        powerUp.setActive(false);

//     this.time.delayedCall(4000, () => {
//       powerUp.setVisible(true);
//       powerUp.setActive(true);
//       powerUp.setPosition(Phaser.Math.Between(50, 800), Phaser.Math.Between(300, 800)); // Reset position randomly
//     });
//   }
// }
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

    // Score
    let score = 0;
    let scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000'
    });

    // Platforms
    const pad = this.physics.add.staticImage(175, 670, 'platform')
      .setDisplaySize(135, 60)
      .refreshBody();

    const jumpPad = this.physics.add.staticGroup();
    jumpPad.create(900, 450, 'platform').setDisplaySize(135, 60).refreshBody();
    jumpPad.create(600, 300, 'platform').setDisplaySize(135, 60).refreshBody();
    jumpPad.create(500, 600, 'platform').setDisplaySize(135, 60).refreshBody();

    // Player
    const player = this.physics.add.sprite(180, 575, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(150);
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

    // -------------------------
    // POWER-UPS
    // -------------------------
    this.powerUpGroup = this.physics.add.group({
      key: 'powerUp',
      repeat: 30,
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

    // -------------------------
    // FIRE ENEMIES 🔥
    // -------------------------
    this.fires = this.physics.add.group();

    for (let i = 0; i < 5; i++) {
      const fire = this.fires.create(
        Phaser.Math.Between(100, 900),
        Phaser.Math.Between(0, 300),
        'alert'
      );

      fire.setBounce(1);
      fire.setCollideWorldBounds(true);
      fire.setVelocity(
        Phaser.Math.Between(-200, 200),
        Phaser.Math.Between(20, 100)
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

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = player;

    // Debug (optional)
    this.physics.world.createDebugGraphic();
  }

  update() {
    const player = this.player;

    if (this.cursors.left.isDown) {
      player.setVelocityX(-180);
      player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      player.setVelocityX(180);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }

    if (this.cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-420);
    }
  }

  // Collect power-up
  collectPowerUp(player, powerUp) {
    powerUp.setVisible(false);
    powerUp.setActive(false);

    this.time.delayedCall(4000, () => {
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
    console.log("Game Over!");
  }
}
