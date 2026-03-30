class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image('background', 'assets/images/back.png');
  }

  create() {
    this.add.image(600, 300, 'background');
  }
}



