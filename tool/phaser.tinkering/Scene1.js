// class Scene1 extends Phaser.Scene {
//   constructor() {
//     super("bootGame");
//   }

//   preload(){
//     this.load.image("background", "images/background.png");
//     this.load.image("ship", "images/ship.png");
//     this.load.image("ship2", "images/ship2.png");
//     this.load.image("ship3", "images/ship3.png");
//   }

//   create() {
//     this.add.text(20, 20, "Loading game...");
//     this.scene.start("playGame");
//   }
// }

class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "images/background.png");
    //
    this.load.spritesheet("ship", "spritesheets/ship.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship2", "spritesheets/ship2.png",{
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("ship3", "spritesheets/ship3.png",{
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("explosion", "spritesheets/explosion.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    // 2.1 load the spritesheet
    this.load.spritesheet("power-up", "spritesheets/power-up.png",{
      frameWidth: 16,
      frameHeight: 16
    });

  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
