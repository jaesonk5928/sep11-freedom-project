class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image('background', 'assets/images/back.png');
    this.load.image('powerUp', 'assets/images/power.png');
    this.load.image('error', 'assets/images/danger.png');
  }

  create() {
    this.add.image(600, 300, 'background');
    this.add.image(100, 200, 'powerUp');
    this.add.image(800, 300, 'error');

    

  }
}



