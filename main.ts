scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
})
let rightArrow: Sprite = null
let leftArrow: Sprite = null
let upArrow: Sprite = null
let lane = 0
let positionX = 0
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(500, function () {
    positionX = randint(4, 150)
    lane = randint(1, 3)
    if (lane == 1) {
        upArrow = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        upArrow.setPosition(positionX, 110)
        upArrow.setVelocity(0, -35)
    } else if (lane == 2) {
        leftArrow = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . . 8 8 8 8 8 8 . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        leftArrow.setPosition(positionX, 110)
        leftArrow.setVelocity(0, -35)
    } else {
        rightArrow = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        rightArrow.setPosition(positionX, 110)
        rightArrow.setVelocity(0, -35)
    }
})
