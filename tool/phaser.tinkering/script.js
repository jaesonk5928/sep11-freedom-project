var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
}

function create ()
{
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'star');
}

function update ()
{
}

