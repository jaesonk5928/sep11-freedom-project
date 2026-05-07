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
    // GAME STATES
    this.deadNow = false;
    this.winnerS = false;
    this.winScore = 800;

    // Background
    const back = this.add.image(800, 300, 'background');
    back.setScale(3);
    back.setDepth(-1);

    let randomX = Phaser.Math.Between(200, 300);
    let randomY = Phaser.Math.Between(300, 400);

    // Score
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      fill: '#000'
    });

    // Platforms
    const pad = this.physics.add.staticImage(175, 670, 'platform')
      .setDisplaySize(125, 35)
      .refreshBody();

    const jumpPad = this.physics.add.staticGroup();
    jumpPad.create(825, 450, 'platform').setDisplaySize(125, 35).refreshBody();
    jumpPad.create(550, 280, 'platform').setDisplaySize(125, 35).refreshBody();
    jumpPad.create(500, 600, 'platform').setDisplaySize(125, 35).refreshBody();
    jumpPad.create(randomX, randomY, 'platform').setDisplaySize(125, 35).refreshBody();
    jumpPad.create(1000, randomY, 'platform').setDisplaySize(125, 35).refreshBody();

    // adds 
    this.player = this.physics.add.sprite(180, 575, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(200);

    // the created sprite animations
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

    // Press r to restart
    this.input.keyboard.on('keydown-R', () => {
      this.scene.restart();
    });

    // Colliders
    this.physics.add.collider(this.player, pad);
    this.physics.add.collider(this.player, jumpPad);

    // PowerUps
    this.powerUpGroup = this.physics.add.group({
      key: 'powerUp',
      repeat: 50,
      setXY: { x: 300, y: 800, stepX: 200 }
    });

    this.powerUpGroup.getChildren().forEach(powerUp => {
      powerUp.setPosition(
        Phaser.Math.Between(200, 1000),
        Phaser.Math.Between(100, 800)
      );
      powerUp.setBounce(0.2);
      powerUp.setCollideWorldBounds(true);
      powerUp.body.setGravityY(200);
      powerUp.setScale(0.05);
    });

    this.physics.add.collider(this.powerUpGroup, jumpPad);
    this.physics.add.collider(this.powerUpGroup, pad);

    this.physics.add.overlap(
      this.player,
      this.powerUpGroup,
      this.collectPowerUp,
      null,
      this
    );

    // Fire group
    this.fires = this.physics.add.group();
    for (let i = 0; i < 4; i++) {
      const fire = this.fires.create(
        Phaser.Math.Between(100, 1000),
        Phaser.Math.Between(0, 800),
        'alert'
      );

      fire.setBounce(1);
      fire.setCollideWorldBounds(true);
      fire.setVelocity(
        Phaser.Math.Between(-200, 600),
        Phaser.Math.Between(20, 300)
      );
      fire.setScale(0.065);
    }

    this.physics.add.collider(this.fires, pad);
    this.physics.add.collider(this.fires, jumpPad);

    this.physics.add.collider(
      this.player,
      this.fires,
      this.hitFire,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.isDead || this.hasWon) return;

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
      player.setVelocityY(-460);
    }
  }

  collectPowerUp(player, powerUp) {
    powerUp.disableBody(true, true);

    this.score += 30;
    this.scoreText.setText('Score: ' + this.score);

    // function that checks if you win
    if (this.score >= this.winScore && !this.winnerS) {
      this.triggerWin();
      return;
    }

    // respawn
    this.time.delayedCall(8000, () => {
      powerUp.enableBody(
        true,
        Phaser.Math.Between(50, 800),
        Phaser.Math.Between(300, 800),
        true,
        true
      );

      powerUp.setVelocity(0, 0);
      powerUp.setBounce(0.2);
      powerUp.setGravityY(200);
    });
  }

  hitFire(player, fire) {
    if (this.deadNow || this.hasWon) return;
    this.deadNow = true;
    this.physics.pause();

    player.setTint(0xff0000);
    player.anims.play('turn');

    var death = this.add.rectangle(400, 300, 800, 600, 0x000000, 1);
    death.setScale(2);

    this.add.text(600, 300, 'YOU SUCK B0Z0!', {
      fontSize: '64px',
      fill: '#ff0000'
    }).setOrigin(0.5);
    this.add.text(600, 350, 'Press R to Restart', {
      fontSize: '28px',
      fill: '#ffffff'
    }).setOrigin(0.5);
  }

  triggerWin() {
    this.hasWon = true;
    this.physics.pause();
    this.player.setVelocity(0, 0);
    this.player.anims.play('turn');

    var win = this.add.rectangle(400, 300, 800, 600, 0x000000, 1);
    win.setScale(2);

    this.add.text(600, 300, "YOU'RE AMAZING!", {
      fontSize: '64px',
      fill: '#00ff00'
    }).setOrigin(0.5);
    this.add.text(600, 350, 'Press R to Restart', {
      fontSize: '28px',
      fill: '#ffffff'
    }).setOrigin(0.5);
  }
}
