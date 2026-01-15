# Tool Learning Log

## Tool: **Phaser**

## Project: **Survival Game**

---

### 10/1/25:
* Today, I wacthed this tutorial [video](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=3) about how to set up Phaser (my tool) without any error.
  * This allows me to code games or cool interative websites in my **IDE**. It had many steps, requiring to download a specific Javascript file with Phaser in it.
    * After, I had to create a new `html` file to eb able to code html elements in seperate windows.
  * Lastly, I had to download a web server for "_security reasons_".
* After following the steps from the video, I did manage to follow the steps, but then I got stuck on how to change the "web server" prefrences. I still need to set up **Phaser**.
* I will try to make the Phaser work in my IDE and tinker with the tool.

### 10/27/25:
* Today, I watched some videos from this [Youtube playlist](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=1) about Phaser Setup and Basics.
  * I watched Episodes 1 to 3. It goes from basic Phaser setup by making **folders** & **files**
  * After, the videos explain how Phaser **scenes** work by downloading _pngs_.
  * It also describes what sprites are and how it affects the scenes to help run smoothly.
  * Lastly, my favorite part was when it showed some starter code on how to download the "**objects**" or sprites by using **Save as..** and dragging the **.png** images. It is very important in terms of game visuals.
* Some challenges that I faced during watching the video and following the lessons/code were:
  * The ability to locate images that load into the game, due to not me linking the pathway to let it load.
  * Accidentally added an additional Phaser download link in my **html** server, allowing Phaser to not function.
* My next steps are to add animations to characters/image background, and add some sound to the Phaser tinker game. It will be more fun then today!

### 11/10/25:
* Today, I watched the same video from last week, but this time, it's Episodes #4 to #6.
  * The 4th video basically talks about how to move images by using both the **X** and **Y** variables to run it's animations smoothly.
    * I tinkered with the speed of falling ships. I changed the speed from _3_ to _5_. This caused the ships to fall faster. Same with trying to make the ships fall slower.
  * The 5th video talked about spritesheets, I don't really understand what these are, but the video explains it. Spritesheets are kinda like **moving** "_pixels_". I think we will learn this type later...
  * The 6th video is about game **_physics_**. It shows me how it works, similarly to real life gravity. It explains why physics are important for games. In the video example, the person uses images, then animates them with `this.physics.add()`. I copied the example to tinker with it  with it, and adjusted the velocity of the images to bounce faster.
* The next steps are to find other resources to help me make an actual game with using movement keys (**w, A, S, D**).

### 11/17/25
* Today, I watched this Phaser [video](https://www.youtube.com/watch?v=0qtg-9M3peI&t=338s) on how to make your first 2D game using Javascript. The timestamp **0:00** - **3:33**, it was mostly just setting up your Github files, HTML, CSS and JS. After the setup, here comes the intresting part:
  * The timestamp **5:21** - **8:02** explains what to code in your scene using Phaser. For this video, the person was creating a scene.
    * The scene was an apple tree that was a beginner-friendly game where you have a basket and you need to catch the falling apples of a specific amount to **WIN**.
  * The timestamp **9:36** - **13:25** talks about adding in player controls to control a digital basket. Up until then, the video talked about adjusting the apple's gravity speed and hitboxes. I will try to adjust the apples later on the video.
* The next steps are to try to add movement keys for the Phaser tutorial "ships". Also, I will watch parts 7 and 8.

### 12/5/25
* Currently, I am wacthing the [Phaser Playlist](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=1) that contains 12 videos. Here's a summary of what I learned:
  * Parts 1-3 are the **Phaser Basics**. Some examples could consist of:
    * Setting up Phaser
    * Loading scenes (like background)
    * Images (In front)
  * Parts 4-6 adds spritesheets and movement.

* Im up to Part 7-8 of the **Phaser Playlist**.
  * Part 7 of the _Phaser_ playlist explains how to code/assign specfic keys to **movements**.
  * For example: I would assign the **W** key as _up_, **A** key for _left_ and so on. This is a very useful tool for games, as you need movement.
  * Part 8 helps me understand why creating specific **classes** is important for games. It helps Javascript interpret "**properties**" seperately from images and sprites.

* Next Steps:
  * Finish wacthing the Phaser playlist by watching parts 9 - 12 in a 2 week span.

### 12/14/25
* I've been watching this [Phaser Playlist](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=1) that has some very informational videos. Here's a summary of what I learned LAST week:
* Part 7-8 of the **Phaser Playlist** were about:
  * Part 7 = How to code/assign specfic keys to **movements**.
  * Part 8 = creating specific **classes** is important for games. It helps Javascript interpret "**properties**" seperately from images and sprites.
* Currently, Im watching part 9 & 10 of the Phaser playlist and will tell you what both videos were about:
  * Part 9 is basically teaching me how to use **"collisions"** with **Phaser**. It consists of using the `().overlap` to  check if 2 objects are "touching" or **colliding**. Also `().hurtPlayer` is a function where if an object touches the "player", they lose. Here was the summary.
  * Part 10 is continuing what Part 9 did but just adding a score counter for the "trial" game that the video makes.

* Next Steps: Finish parts 11 - 12 next week.

### 1/15/26
* Today is the last part of watching this [Phaser Playlist](https://www.youtube.com/watch?v=frRWKxB9Hm0&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=1). Here's a recap of what I learned LAST time as of (**12/14/25**):
* Part 9 - 10 of the **Phaser Playlist** was about:
  * Part 9 = The main highlight of this video is about **Collisions**. It explains how to code so the objects in the game can _collide_ with each other, cauing Phaser to calculate when a game object collides. <br>

  * Part 10 = Adding a "score" counter to determine the number of times the "ship" 

* Currently, Im watching part 9 & 10 of the Phaser playlist and will tell you what both videos were about:
  * Part 9 is basically teaching me how to use **"collisions"** with **Phaser**. It consists of using the `().overlap` to  check if 2 objects are "touching" or **colliding**. Also `().hurtPlayer` is a function where if an object touches the "player", they lose. Here was the summary.
  * Part 10 is continuing what Part 9 did but just adding a score counter for the "trial" game that the video makes.

* Next Steps: Finish parts 11 - 12 next week.

















<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
