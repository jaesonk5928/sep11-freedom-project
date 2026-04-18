# Entry 5
##### 4/18/26

### Content
Before writing Blog 5, I've **locked** in on my Freedom Project and finished the **MVP** for my game. I will show you my code after I explain what it does. When coding my game, I've been using the official [**Phaser**](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1) website to guide me making my game. It explained how to load in images & sprites in a scene, using the sprites to collect, and stuff that kills the user. Moving on, my game is about collecting "_lightning_" to earn points. There are enemies that try to kill you (fire) that bounce around. The goal is to collect as much points as possible. Here are some code snippets:
```js
preload(){
    this.load.image("background", "assets/images/space.png");
    this.load.image("fire", "assets/images/fire.png");
    this.load.spritesheets("player", "assets/spritesheets/dude.png");
}

create(){
    const bigBg = this.add.image(400, 350, "background");
    const enemy = this.add.image(100, 300, "fire");
    const player = this.add.spritesheet(400, 350, "player");
}
```
This uses the `preload()` & `create()` function to load/create in the images & sprites in my scene.

```js
 this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

     this.input.keyboard.on('keydown-R', () => {
        this.scene.restart();
    });
```
I used the sprite's (_player_) animations to assign frames to each arrow key.

### EDP (Engineering Design Process)
Now that I am writing my 5th **blog entry**, Now I'm on Step 5 of the EDP: "**Create a prototype**". During **Blog 4** & **Step 4**, I thought of the most promising solution that could help with social media **safety**. I chose: You have to do a "**double verification**" feature to people you don't trust. This might exist already, but this one is more _strict_. Now you have to know their **b-day/age** and recent posts. My **prototype** is a pop-up menu "feature" that can be added to any current SM apps.

### Skills
Skills that I've worked on are **Organization** and **Embracing Failure**.

#### Organization
I improved on **Organization** by marking important _homeworks_ & _events_. For example, I had so much homework during Spring break, so before it started, I've marked every single homework & make a to-do list when I should do each homework. It was very smooth after on.

#### Embracing Failure
I improved on **Embracing Failure**. These past weeks, when I wass struggling to do my **Freedom Project**, asking others on _Slack_ & in-person about my "broken code" helped me understand what I was doing wrong and how to fix my mistakes. This caused me to be more motivated on coding. 

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
