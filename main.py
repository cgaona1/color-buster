lane = 0
upArrow: Sprite = None
leftArrow: Sprite = None
rightArrow: Sprite = None

def on_update_interval():
    global lane, upArrow, leftArrow, rightArrow
    lane = randint(1, 3)
    if lane == 1:
        upArrow = sprites.create(img("""
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
            """),
            SpriteKind.projectile)
        upArrow.set_position(74, 114)
        upArrow.set_velocity(0, -35)
    elif lane == 2:
        leftArrow = sprites.create(img("""
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
            """),
            SpriteKind.projectile)
        leftArrow.set_position(38, 114)
        leftArrow.set_velocity(0, -35)
    else:
        rightArrow = sprites.create(img("""
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
            """),
            SpriteKind.projectile)
        rightArrow.set_position(113, 114)
        rightArrow.set_velocity(0, -35)
game.on_update_interval(500, on_update_interval)
