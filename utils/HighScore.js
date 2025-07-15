// HighScore utility
// Manages high score persistence using localStorage
function HighScore() {
    this.key = "spaceShooterHighScore";
}

HighScore.prototype.get = function() {
    return localStorage.getItem(this.key) || 0;
};

HighScore.prototype.set = function(score) {
    var current = this.get();
    if (score > current) {
        localStorage.setItem(this.key, score);
    }
};

window.HighScore = HighScore;