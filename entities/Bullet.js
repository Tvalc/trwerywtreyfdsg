// Bullet entity class
// Represents projectiles fired by player or enemies
function Bullet(scene, x, y, type) {
    this.scene = scene;
    this.type = type;
    this.sprite = scene.physics.add.sprite(x, y, null);
    if (type === "player") {
        this.sprite.setVelocityY(-400);
        var graphics = scene.add.graphics();
        graphics.fillStyle(0x00ffff, 1);
        graphics.fillRect(-2, -5, 4, 10);
    } else {
        this.sprite.setVelocityY(300);
        var graphics = scene.add.graphics();
        graphics.fillStyle(0xffff00, 1);
        graphics.fillRect(-2, -5, 4, 10);
    }
    this.sprite.setOrigin(0.5, 0.5);
    this.sprite.setDisplaySize(4, 10);
    // Destroy when out of bounds
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
}

window.Bullet = Bullet;