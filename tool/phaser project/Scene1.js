class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }


preload(){
    // this.load.image("background", "assets/images/darkBg.png");
    this.load.spritesheet("player", "phaser project/assets/spritesheets/knigh.png",{
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
    this.add.image(400, 300, 'background');
  }
}



