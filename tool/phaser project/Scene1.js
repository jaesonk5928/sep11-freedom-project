class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/images/back.jpeg");
    this.load.spritesheet("player", "assets/spritesheets/knight.png", {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
  }
}



