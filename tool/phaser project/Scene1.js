class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/images/darkBg.png"); // uncommented
    this.load.spritesheet("player", "assets/spritesheets/knight.png", { // fixed spelling here
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
  }
}



