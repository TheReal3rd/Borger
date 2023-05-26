let PosX = scene.screenWidth() / 2
let PosY = scene.screenHeight() / 2
let VelX = randint(-2, 2)
let VelY = randint(-2, 2)
scene.setBackgroundColor(15)
let mySprite = sprites.create(assets.image`smallBurger`, SpriteKind.Player)
forever(function () {
    PosY = PosY + VelY
    PosX = PosX + VelX
    mySprite.setPosition(PosX, PosY)
    if (PosX < 0 || PosX > scene.screenWidth()) {
        VelX = VelX * -1
    }
    if (PosY < 0 || PosY > scene.screenHeight()) {
        VelY = VelY * -1
    }
})
