// class Scene2 extends Phaser.Scene {
//   constructor() {
//     super("playGame");
//   }

//   create() {
//     // 4.1 make the background a tile sprite
//     //this.background = this.add.image(0, 0, "background");
//     this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
//     this.background.setOrigin(0, 0);

//     this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship");
//     this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2");
//     this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3");

//     this.add.text(20, 20, "Falling Ships", {
//       font: "25px Arial",
//       fill: "yellow"
//     });

//     this.background.setScale(2);
//     // this.ship1.setOrigin(0.5);
//     this.background.flipX = true;
//     // this.background.angle = 90;


//   }

//   // 0 add the update function
//   update() {

//     // 1.1 call a function to move the ships vertically
//     this.moveShip(this.ship1, 1);
//     this.moveShip(this.ship2, 2);
//     this.moveShip(this.ship3, 3);

//     // 4.2 scroll the background
//     this.background.tilePositionY -= 2;

//   }

//   // 1.2 create the function to move the ships
//   moveShip(ship, speed) {
//     // increase the position of the ship on the vertical axis
//     ship.y += speed;
//     // if the ship hits the bottom of the screen call the reset function
//     if (ship.y > config.height) {
//       // 2.1 call a reset position function
//       this.resetShipPos(ship);
//     }
//   }

//   // 2.2 create the reset position function
//   resetShipPos(ship){
//     // put the ship on the top
//     ship.y = 10;
//     // put the ship on a random position on the x axis
//     var randomX = Phaser.Math.Between(0, config.width);
//     ship.x = randomX;
//   }


// }

class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {

    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
    this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
    this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");


    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);

    this.add.text(20, 20, "Playing game", {
      font: "25px Arial",
      fill: "yellow"
    });

    // POWER UPS

    //2.1 Two Animations for the power ups
    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

    // 3.1
    this.physics.world.setBoundsCollision();

    this.powerUps = this.physics.add.group();

    // 2.2 Add multiple objects
    var maxObjects = 4;
    for (var i = 0; i <= maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16, 16, "power-up");
      this.powerUps.add(powerUp);
       powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);

      // set random animation
      if (Math.random() > 0.5) {
        powerUp.play("red");
      } else {
        powerUp.play("gray");
      }

      // setVelocity
      powerUp.setVelocity(100, 100);
      // 3.2
      powerUp.setCollideWorldBounds(true);
      // 3.3
     powerUp.setBounce(1);

    }

  }

  update() {

    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);

    this.background.tilePositionY -= 0.5;

  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
  }

  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }


}
