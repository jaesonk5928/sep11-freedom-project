class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    // this.load.image("background", "assets/images/darkBg.png"); // uncommented
    this.load.spritesheet("player", "assets/spritesheets/knight.png", { // fixed spelling here
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.add.image(400, 300, 'background'); // add background here if you want
    this.scene.start("playGame"); // move to after adding stuff or do this in playGame
  }
}



