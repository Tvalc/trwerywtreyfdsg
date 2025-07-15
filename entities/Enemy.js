// Enemy entity class
// Represents enemy spaceships
function Enemy(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, null);
    this.sprite.setVelocityY(100); // Move down
    this.sprite.setCollideWorldBounds(true);
    // Use Phaser graphics for simple enemy visualization
    var graphics = scene.add.graphics();
    graphics.fillStyle(0xff0000, 1);
    graphics.fillCircle(0, 0, 15);
    this.sprite.setOrigin(0.5, 0.5);
    this.sprite.setDisplaySize(30, 30);
    // Note: In production, replace with actual texture
}

Enemy.prototype.update = function() {
    // Simple movement: move down
    // For advanced: add patterns here
};

window.Enemy = Enemy;