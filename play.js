class Title extends Phaser.Scene {
    constructor() {
        super("title");

    }
    preload() {
        this.cameras.main.setBackgroundColor(0);

        this.load.image("roly poly", "assets/rolypoly.png");
    }
    
    create() {
        this.add.sprite(400, 200, "roly poly");
        const titleText = this.add.text(400, 200, 'Roly Poly: To the End', 
        {
            fontFamily: 'Arial',
            fontSize: '48px',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 4,
        }).setOrigin(0.5);

        this.tweens.add({
            targets: titleText,
            y: 250, // The target y position
            duration: 1000,
            ease: 'Bounce.Out',
            yoyo: true,
            repeat: -1 // Repeat indefinitely
          });

          const startButton = this.add.text(400, 400, 'Start Game', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
              x: 20,
              y: 10
            }
          }).setOrigin(0.5);
      
          // Set up animation for the start button
          this.tweens.add({
            targets: startButton,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 500,
            yoyo: true,
            repeat: -1
          });

          //this.input.on('pointerdown', this.startGame, this);
    }
}