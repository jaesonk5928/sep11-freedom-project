# Entry 2
##### 12/15/25

### Content
The current tool that I am using and learning about is **Phaser**. Some ways I've been learning Phaser can consist of Youtube videos like this [playlist](https://www.youtube.com/watch?v=a17P2A4Bgko&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=12) that I'm almost done watching. It explains how to set up **Phaser** and what to expect. It goes step by step of how to create _multiple_ scenes, load spritesheets/images, physics, etc. I also found an additional [article](https://shakuro.com/blog/phaser-js-a-step-by-step-tutorial-on-making-a-phaser-3-game) online about Phaser that also helps/gives **informational** steps on how to set up _Phaser_. <br> <br> Here is a **code snippet** of loading the ships in a scene:

```js
this.load.image("ship", "assets/images/ship.png");
this.load.image("ship2", "assets/images/ship2.png");
this.load.image("ship3", "assets/images/ship3.png");
```
Here is a code snippet that can animate the spaceship's movement:
```js
// makes the animation for the ships
this.anims.create({
    key: "ship1_anim",
    frames: this.anims.generateFrameNumbers("ship"),
    frameRate: 20,
    repeat: -1

// plays the animation for the ships
this.ship1.play("ship1_anim");
this.ship2.play("ship2_anim");
this.ship3.play("ship3_anim");

// Adjustable speed of the ships
moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
  }

// uses X & Y coordinates to reset the ship's movement infinitly
  resetShipPos(ship){
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
}
```
Here's a code snippet about loading in spritesheets using **Phaser**:
```js
this.load.spritesheet("ship", "assets/spritesheets/ship.png",{
  frameWidth: 16,
  frameHeight: 16
});
```
I also wanted to show this code snippet about using `this.input.on('gameobjectdown', this.destroyShip, this)` as a way to make the ships interactive. When you click on the ship with a mouse or touchpad, it "explodes" using an explosion as a "**spritesheet**". <br>
**The example**:
```js
 this.input.on('gameobjectdown', this.destroyShip, this);
    this.add.text(20, 20, "Click the ships", {
      font: "25px Arial",
      fill: "yellow"
    });

  }
    destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }
```
<br>

During the winter break, some **FP** goals that I am going to set (that are _possible_ & _achievable_) are:
* Try to use my tool **Phaser** to try and make a "_playable_" game that is either **simple** and/or **basic**. I could do this by watching some **Phaser** guides/tutorials. This can include, but not limited to:
  * A "worse" or "beta" version of the original **Mario** game
  * A simple card game like **Poker** or **Blackjack**
  * An **educational math game** that uses _algebra_  equations required to play.

* Another goal I have is to finish this **Youtube** playlist tutorial about creating a "space" game that uses **Phaser** to be fully _functional_. I have watched parts **1** to **10**. There are 12 videos in the playlist for me to watch. Here is the [**source**](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=1).

### EDP (Engineering Design Process)
During my first (1st) **blog entry**, I said that I was on step 1 of the EDP: "**Defining the Problem**". Now, I'm at the 2nd step of the _Engineering Design Process_: "**Researching the Problem**". I've been hoping for all social media platforms to fix/change their safety regulations for their user's **safeness**. The problem with texting people you know little to nothing about poses a harm. I might try to change it so that you can't **DM** (direct message) _**nor**_ text anyone unless the user is being followed/subscribed by the person who they want to chat with.

### Skills
Some skills that I have worked on are **How to Google** and **How to Read**.

#### How to Google
The main reason I improved on this skill is because I searched up resources that helped me understand and helped contribute to the structure of this current blog. For example, the article that I listed above was a game changer for my learning development of Phaser.

#### How to Read
I've improved my reading skills while reading the article (mentioned above). I first looked **when** and **who** created the article. This is execeptionally important for looking for realiable sources that have a creditable _publisher_ and requires to be _relevant_. 
<br>

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
