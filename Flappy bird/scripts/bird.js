// Define the Bird class
class Bird {
    constructor() {
        // Define animation frames for the bird's movement
        this.animation = [
            { sX: 276, sY: 112 },
            { sX: 276, sY: 139 },
            { sX: 276, sY: 164 },
            { sX: 276, sY: 139 },
        ];
        // Initial position of the bird
        this.x = 50;
        this.y = 140;
        // Size of the bird sprite
        this.w = 34;
        this.h = 26;
        // Radius for collision detection
        this.radius = 12;
        // Frame index for animation
        this.frame = 0;
        // Gravity and flap speed
        this.gravity = 0.048;
        this.flapping = 1.5;
        // Initial speed and rotation
        this.speed = 0;
        this.rotation = 0;
    };

    // Method to draw the bird on the canvas
    draw() {
        let bird = this.animation[this.frame];
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        context.restore();
    }

    // Method to make the bird flap
    flap() {
        this.speed = -this.flapping;
    }

    // Method to update the bird's position and animation
    update() {
        // Set animation speed based on game state
        this.period = gameState.current === gameState.getReady ? 10 : 5;
        // Increment frame index for animation
        this.frame += frames % this.period === 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;

        if (gameState.current === gameState.getReady) {
            // Reset position and rotation when game is in "get ready" state
            this.y = 150;
            this.rotation = 0 * DEGREE;
        } else {
            // Apply gravity and update position
            this.speed += this.gravity;
            this.y += this.speed;

            // Prevent bird from going below the ground
            if (this.y + this.h / 2 >= canvas.height - foreground.h) {
                this.y = canvas.height - foreground.h - this.h / 2;
                // End game if bird hits the ground
                if (gameState.current === gameState.game) {
                    sfxDie.play();
                    gameState.current = gameState.gameOver;
                }
            }

            // Adjust rotation based on bird's speed
            if (this.speed >= this.flapping) {
                this.rotation = 50 * DEGREE;
                this.frame = 1;
            } else {
                this.rotation = -25 * DEGREE;
            }
        }
    }

    // Method to reset bird's speed
    speedReset() {
        this.speed = 0;
    }
}
