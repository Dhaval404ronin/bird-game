// Define the Pipes class
class Pipes {
    constructor() {
        // Array to store pipe positions
        this.positions = [];
        // Source positions and size of the pipe sprites
        this.top = { sX: 553, sY: 0 };
        this.bottom = { sX: 502, sY: 0 };
        this.w = 53;
        this.h = 400;
        // Gap between top and bottom pipes
        this.gap = 100;
        // Maximum y-position of pipes
        this.maxYPos = -150;
        // Movement speed of pipes
        this.dX = 1.2;
    };

    // Method to draw pipes on the canvas
    draw() {
        // Loop through each pipe position and draw top and bottom pipes
        for (let i = 0; i < this.positions.length; i++) {
            let p = this.positions[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;

            // Draw top pipe
            context.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);
            // Draw bottom pipe
            context.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        };
    }

    // Method to update pipe positions and handle collisions
    update() {
        // If game is not in progress, do not update
        if (gameState.current !== gameState.game) return;

        // Generate new pipes every 100 frames
        if (frames % 100 === 0) {
            this.positions.push({
                x : canvas.width,
                // Randomize y-position of pipes within a range
                y : this.maxYPos * (Math.random() + 1)
            });
        };

        // Loop through each pipe position
        for (let i = 0; i < this.positions.length; i++) {
            let p = this.positions[i];

            let bottomPipeYPos = p.y + this.h + this.gap;

            // Check for collision with top pipe
            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && 
                bird.y - bird.radius < p.y + this.h) {
                    // Play collision sound and end game
                    sfxCollision.play();
                    gameState.current = gameState.gameOver;
                }

            // Check for collision with bottom pipe
            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPos && 
                bird.y - bird.radius < bottomPipeYPos + this.h) {
                    // Play collision sound and end game
                    sfxCollision.play();
                    gameState.current = gameState.gameOver;
                }

            // Move pipes to the left
            p.x -= this.dX + 0.25;
            
            // Remove pipes that have moved offscreen
            if (p.x + this.w <= 0) {
                this.positions.shift();
                // Play point sound and update score
                sfxPoint.play();
                score.value++;
                // Update high score if necessary
                score.highScore = Math.max(score.value, score.highScore);
                localStorage.setItem('highScore', score.highScore)
            };
        };
    }

    // Method to reset pipe positions
    reset() {
        this.positions = [];
    }
}
