var config = {
  width: 1600,
  height: 1600,
  backgroundColor: 0x000000,
  physics: {
    default: 'arcade',
      arcade: {
        gravity: { y: 300 },
          debug: false
      }
  },
      scene: [Scene1]
};

var game = new Phaser.Game(config);
