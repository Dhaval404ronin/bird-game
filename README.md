in flappy bird game making learned how to use spirits png from one file as diffrent elements.
use of this in js made me clear of this key word. created all element js file seprate for better organization and easy to understand

spirit png: code to draw these elements onto the canvas.
This line draws the bird sprite onto the canvas using the specified source position (bird.sX and bird.sY) and dimensions (this.w and this.h). Similarly, other game elements are drawn using different source positions and dimensions from the same sprite image.


app.js (main):

Initialization: The app.js file initializes the game by setting up the canvas, loading necessary assets (such as sprites and sounds), and defining the game state.
User Interactions: It handles user interactions by listening for mouse clicks on the canvas. Depending on the current game state, it responds to clicks to start the game, make the bird flap, or restart the game after game over.
Game Loop: app.js manages the game loop using requestAnimationFrame(). It calls the update() and draw() functions repeatedly to update the game state and render the game elements on the canvas.
bird.js:

Bird Class: Defines the Bird class, which represents the player-controlled character in the game.
Properties: Includes properties such as position (x and y), size (w and h), animation frames, speed, gravity, and rotation.
Methods: Provides methods for drawing the bird on the canvas (draw()), updating its position and animation based on user input and game state (update()), and making the bird flap (flap()).
background.js:

Background Class: Implements the Background class responsible for drawing the game's background.
Properties: Includes properties for the background image's source position (sX and sY), size (w and h), and position (x and y).
Draw Method: Renders the background image on the canvas.
foreground.js:

Foreground Class: Implements the Foreground class for drawing the ground and managing its movement.
Properties: Defines properties for the foreground image's source position, size, position, and movement speed.
Draw Method: Renders the foreground image on the canvas.
Update Method: Manages the movement of the foreground to create the illusion of the bird flying.
pipes.js:

Pipes Class: Defines the Pipes class to manage the generation, drawing, and updating of pipes.
Properties: Includes properties for pipe size, gap between pipes, maximum y-position, and movement speed.
Methods: Provides methods for drawing pipes on the canvas (draw()) and updating their position and state (update()).
getReady.js:

GetReady Class: Implements the GetReady class for displaying the "Get Ready" message at the start of the game.
Properties: Defines properties for the position and size of the "Get Ready" message.
Draw Method: Renders the "Get Ready" message on the canvas when the game state is set to "get ready".
gameOver.js:

GameOver Class: Defines the GameOver class responsible for displaying the game over screen.
Properties: Includes properties for the position and size of the game over message.
Draw Method: Renders the game over message on the canvas when the game state is set to "game over".
score.js:

Score Class: Implements the Score class to manage the game score.
Properties: Defines properties for the current score and high score, which are stored locally.
Methods: Provides methods for drawing the score on the canvas (draw()) and resetting the score (reset())
