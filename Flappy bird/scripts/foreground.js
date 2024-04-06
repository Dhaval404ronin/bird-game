// Define the Foreground class
class Foreground {
    constructor() {
        // Source position and size of the foreground image
        this.sX = 276;
        this.sY = 0;
        this.w = 224;
        this.h = 112;
        // Initial position of the foreground
        this.x = 0;
        this.y = canvas.height - 112;
        // Movement speed of the foreground
        this.dX = 1.2;
    };

    // Method to draw the foreground on the canvas
    draw() {
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        // Draw a second copy of the foreground for seamless looping
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }

    // Method to update the foreground's position
    update() {
        // Only update position when the game is running
        if (gameState.current === gameState.game) {
            this.x = (this.x - this.dX) % (this.w / 2);
        }
    }
}
