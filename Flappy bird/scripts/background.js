// Define the Background class
class Background {
    constructor() {
        // Source position and size of the background image
        this.sX = 0;
        this.sY = 0;
        this.w = 275;
        this.h = 226;
        // Initial position of the background
        this.x = 0;
        this.y = canvas.height - 226;
    };

    // Method to draw the background on the canvas
    draw() {
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        // Draw a second copy of the background for seamless looping
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.w, this.y, this.w, this.h);
    }
}
