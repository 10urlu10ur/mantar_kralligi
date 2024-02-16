controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sol = false
    sağ = false
    yukarı = true
    aşağı = false
    Oyuncu.setImage(img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 . . . . 4 4 . . . . 
        . . . . 4 4 . . . . 4 4 . . . . 
        . . 4 4 . . . . . . . . 4 4 . . 
        . . 4 4 . . . . . . . . 4 4 . . 
        4 4 1 1 1 1 1 1 1 1 1 1 1 1 4 4 
        4 4 1 1 1 1 1 1 1 1 1 1 1 1 4 4 
        . . d d . . . . . . . . d d . . 
        . . d d . . . . . . . . d d . . 
        . . 7 7 . . . . . . . . 7 7 . . 
        . . 7 7 . . . . . . . . 7 7 . . 
        . . d d f f d d d d f f d d . . 
        . . d d f f d d d d f f d d . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sol == true) {
        ok = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 . . . . . 3 3 . . . . . . 
            . 5 5 . . . . 3 3 . . . . . . . 
            5 5 5 1 1 1 1 1 . . . . . . . . 
            5 5 5 1 1 1 1 1 . . . . . . . . 
            . 5 5 . . . . 3 3 . . . . . . . 
            . . 5 . . . . . 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Oyuncu, -100, 0)
    } else if (sağ == true) {
        ok = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 . . . . . 5 . . 
            . . . . . . . 3 3 . . . . 5 5 . 
            . . . . . . . . 1 1 1 1 1 5 5 5 
            . . . . . . . . 1 1 1 1 1 5 5 5 
            . . . . . . . 3 3 . . . . 5 5 . 
            . . . . . . 3 3 . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Oyuncu, 100, 0)
    } else if (yukarı == true) {
        ok = sprites.createProjectileFromSprite(img`
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 3 3 . . 3 3 . . . . . 
            . . . . . 3 . . . . 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Oyuncu, 0, -100)
    } else {
        ok = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 . . . . 3 . . . . . 
            . . . . . 3 3 . . 3 3 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            `, Oyuncu, 0, 100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sol = true
    sağ = false
    yukarı = false
    aşağı = false
    Oyuncu.setImage(img`
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . 4 4 1 1 d d 7 7 d d 2 2 2 
        . . . 4 4 1 1 d d 7 7 d d 2 2 2 
        . 4 4 . . 1 1 . . . . f f 2 2 2 
        . 4 4 . . 1 1 . . . . f f 2 2 2 
        4 . . . . 1 1 . . . . d d 2 2 2 
        4 . . . . 1 1 . . . . d d 2 2 2 
        4 . . . . 1 1 . . . . d d 2 2 2 
        4 . . . . 1 1 . . . . d d 2 2 2 
        . 4 4 . . 1 1 . . . . f f 2 2 2 
        . 4 4 . . 1 1 . . . . f f 2 2 2 
        . . . 4 4 1 1 d d 7 7 d d 2 2 2 
        . . . 4 4 1 1 d d 7 7 d d 2 2 2 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sol = false
    sağ = true
    yukarı = false
    aşağı = false
    Oyuncu.setImage(img`
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        2 2 2 d d 7 7 d d 1 1 4 4 . . . 
        2 2 2 d d 7 7 d d 1 1 4 4 . . . 
        2 2 2 f f . . . . 1 1 . . 4 4 . 
        2 2 2 f f . . . . 1 1 . . 4 4 . 
        2 2 2 d d . . . . 1 1 . . . . 4 
        2 2 2 d d . . . . 1 1 . . . . 4 
        2 2 2 d d . . . . 1 1 . . . . 4 
        2 2 2 d d . . . . 1 1 . . . . 4 
        2 2 2 f f . . . . 1 1 . . 4 4 . 
        2 2 2 f f . . . . 1 1 . . 4 4 . 
        2 2 2 d d 7 7 d d 1 1 4 4 . . . 
        2 2 2 d d 7 7 d d 1 1 4 4 . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sol = false
    sağ = false
    yukarı = false
    aşağı = true
    Oyuncu.setImage(img`
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . d d f f d d d d f f d d . . 
        . . d d f f d d d d f f d d . . 
        . . 7 7 . . . . . . . . 7 7 . . 
        . . 7 7 . . . . . . . . 7 7 . . 
        . . d d . . . . . . . . d d . . 
        . . d d . . . . . . . . d d . . 
        4 4 1 1 1 1 1 1 1 1 1 1 1 1 4 4 
        4 4 1 1 1 1 1 1 1 1 1 1 1 1 4 4 
        . . 4 4 . . . . . . . . 4 4 . . 
        . . 4 4 . . . . . . . . 4 4 . . 
        . . . . 4 4 . . . . 4 4 . . . . 
        . . . . 4 4 . . . . 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.gameOver(true)
})
let mantar: Sprite = null
let ok: Sprite = null
let aşağı = false
let yukarı = false
let sağ = false
let sol = false
let Oyuncu: Sprite = null
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
Oyuncu = sprites.create(img`
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . 4 4 1 1 d d 7 7 d d 2 2 2 
    . . . 4 4 1 1 d d 7 7 d d 2 2 2 
    . 4 4 . . 1 1 . . . . f f 2 2 2 
    . 4 4 . . 1 1 . . . . f f 2 2 2 
    4 . . . . 1 1 . . . . d d 2 2 2 
    4 . . . . 1 1 . . . . d d 2 2 2 
    4 . . . . 1 1 . . . . d d 2 2 2 
    4 . . . . 1 1 . . . . d d 2 2 2 
    . 4 4 . . 1 1 . . . . f f 2 2 2 
    . 4 4 . . 1 1 . . . . f f 2 2 2 
    . . . 4 4 1 1 d d 7 7 d d 2 2 2 
    . . . 4 4 1 1 d d 7 7 d d 2 2 2 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Oyuncu, tiles.getTileLocation(9, 9))
controller.moveSprite(Oyuncu, 50, 50)
scene.cameraFollowSprite(Oyuncu)
Oyuncu.setStayInScreen(true)
sol = true
sağ = false
yukarı = false
aşağı = false
game.onUpdateInterval(5000, function () {
    for (let index = 0; index < (game.runtime() + 1) / 15000; index++) {
        mantar = sprites.create(img`
            . . . . . . f f f f f . . . . . 
            . . f f f f 1 2 2 2 2 f f f . . 
            . f 2 2 1 1 1 2 2 2 2 2 2 1 f . 
            f 2 2 2 1 1 1 2 2 1 2 2 2 1 1 f 
            f 1 2 2 2 2 2 2 1 1 2 2 2 2 2 f 
            f 1 2 2 2 2 2 2 1 1 2 1 1 2 2 f 
            f f f 1 1 2 2 2 2 2 2 1 1 f f . 
            . . . f 1 2 2 2 2 2 2 1 f . . . 
            . . . . f 2 2 2 2 2 2 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mantar, assets.tile`myTile0`)
        mantar.follow(Oyuncu, 30)
    }
})
