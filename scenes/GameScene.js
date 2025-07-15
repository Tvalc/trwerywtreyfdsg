// Main GameScene class extending Phaser.Scene
// Handles game logic, updates, and collisions
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
    }

    create() {
        this.player = new window.Player(this);
        this.enemies = this.physics.add.group();
        this.playerBullets = this.physics.add.group();
        this.enemyBullets = this.physics.add.group();
        this.scoring = new window.Scoring(this);
        this.highScore = new window.HighScore();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.gameOver = false;
        this.enemySpawnTimer = this.time.addEvent({ delay: 1000, callback: this.spawnEnemy, callbackScope: this, loop: true });

        // Collisions
        this.physics.add.collider(this.player.sprite, this.enemies, this.playerHit, null, this);
        this.physics.add.collider(this.playerBullets, this.enemies, this.enemyHit, null, this);

        // Game over text
        this.gameOverText = this.add.text(400, 300, "Game Over", { fontSize: "64px", fill: "#ff0000" });
        this.gameOverText.setOrigin(0.5);
        this.gameOverText.visible = false;
    }

    update(time, delta) {
        if (this.gameOver) return;
        this.player.update(time, delta, this.cursors, this.spaceKey);
        this.enemies.getChildren().forEach(function(enemy) {
            enemy.update();
        });
    }

    spawnEnemy() {
        var x = Phaser.Math.Between(50, 750);
        var enemy = new window.Enemy(this, x, 0);
        this.enemies.add(enemy.sprite);
    }

    enemyHit(bullet, enemy) {
        bullet.destroy();
        enemy.destroy();
        this.scoring.addPoints(10);
    }

    playerHit(player, enemy) {
        enemy.destroy();
        this.gameOver = true;
        this.gameOverText.visible = true;
        this.highScore.set(this.scoring.score);
        // Restart option: press R to restart
        this.input.keyboard.once("keydown-R", function() {
            this.scene.restart();
        }, this);
    }
}

window.GameScene = GameScene;