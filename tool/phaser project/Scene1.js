class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }


preload(){
    this.load.image("background", "assets/images/darkBg.zip");
    this.load.spritesheet("player", "assets/images/knight.png");
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
    this.add.image(400, 300, 'background');
  }
}



