class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image('background', 'assets/images/back.png');
    this.load.image('platform', 'assets/images/platform.png');
    this.load.image('error', 'assets/images/danger.png');
  }

  var jumpPad;

  create() {
    const back = this.add.image(800, 300, 'background');
    const pad = this.add.image(100, 200, 'platform');

    jumpPad = this.physics.add.staticGroup();

    back.scale = 2.8;
    pad.scale = 0.25;

  }

  update () {

  }
}



