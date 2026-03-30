class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image('background', 'assets/images/back.png');
    this.load.image('powerUp', 'assets/images/power.png')
  }

  create() {
    this.add.image(600, 300, 'background');
    this.add.image(100, 200, 'powerUp');

  }
}



