var allEnemies = [];

// Added 'score' ans 'highScore' to track the number
// of times that the player successfully crossed
var score = 0;
var highScore = 0;

var Enemy = function(speed) {
    // Added 'speed' as a parameter so that the bugs
    // would travel at random speeds
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.x = -100;
    this.y = determineLane();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // This line determines how quickly the enemy moves
    // across the screen. The '5' multiplier sped the enemies
    // up to what felt like an appropriate speed
    this.x += this.speed * dt * 5;

    // Once an enemy has gone off the screen, it is reset back
    // to the left and the speed and lane are randomly generated
    if (this.x > 500){
        this.y = determineLane();
        this.x = -100;
        this.speed = determineSpeed();
    }

    // This equation determines if the player has come too close
    // to an enemy. If so, the player is moved back to the starting
    // position and the score is reset.
    if ((Math.pow(this.x - player.x, 2) < 6000) && (Math.pow(this.y - player.y, 2) < 3000)){
        resetPlayer();
        score = 0;
        updateScore();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player is assigned an image and placed on the grid
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

// Checks to see if the player has reached the water. If so, 
// the player is placed back in the starting position and the 
// player's score is incremented
Player.prototype.update = function(){
    if (this.y < 0){ 
        resetPlayer();
        score++;
        updateScore();
    }
};

// Draw the player on the screen, required method for game 
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// This function handles updating the x,y coordinates of the
// player based on the arrow key depressed
Player.prototype.handleInput = function(key){ 
    switch (key){
        case 'up':
            if (this.y > 0){
                this.y -= 85;
            }
            break;
        case 'down':
            if (this.y < 400){
                this.y += 85;
            }
            break;
        case 'left':
            if (this.x > 0){
                this.x -= 100;
            }
            break;
        case 'right':
            if (this.x < 400){
                this.x += 100;
            }
            break;
    }
    console.log(key);
    this.render();
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
allEnemies.push(new Enemy(determineSpeed()));
allEnemies.push(new Enemy(determineSpeed()));
allEnemies.push(new Enemy(determineSpeed()));
allEnemies.push(new Enemy(determineSpeed()));
allEnemies.push(new Enemy(determineSpeed()));
allEnemies.push(new Enemy(determineSpeed()));


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// This function handles updating the score and high score on the HTML page
function updateScore(){
    if (score > highScore){
        highScore = score;
    }
    document.getElementById("gameScore").innerHTML = "Score: " + score + "<br>High Score: " + highScore;
}

// This function moves the player back to the starting position
function resetPlayer(){
    player.x = 200;
    player.y = 400;
}

// This function handles randomly assigning an anemy to one of the three
// available lanes.
function determineLane(){
    var randomInt = Math.floor( Math.random() * ( 3 ) ) + 1;
    switch (randomInt){
        case 1:
            y = 50;
            break;
        case 2:
            y = 135;
            break;
        case 3:
            y = 220;
            break;
    }
    return y;
}

// This function returns a random speed between 20-60
// These numbers were arrived at after thorough testing
function determineSpeed(){
    return Math.floor(Math.random() * 60) + 20;
}