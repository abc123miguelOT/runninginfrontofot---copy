controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    runner.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    runner.vx = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let runner: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`OaklandTech`)
runner = sprites.create(assets.image`truck3`, SpriteKind.Player)
runner.ay = 500
runner.vx = 100
scene.cameraFollowSprite(runner)
animation.runImageAnimation(
runner,
[img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . . e e e f e 2 b f f f d c . 
    . . e e 2 2 d f 2 1 1 1 1 b c . 
    . . e e 2 2 d f e e c c c . . . 
    . . b 1 1 d e 2 e e c . . . . . 
    . . f f f f d d f . . . . . . . 
    f f f f f f d d . . . . . . . . 
    f f f . f f f e . . . . . . . . 
    f f . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . e e e f e 2 2 b f f f d c . 
    . e e 2 2 d f e 2 1 1 1 1 b c . 
    . e e 2 2 d f e e e c c c . . . 
    . b 1 1 e e 2 2 e e c . . . . . 
    . . f d d 2 2 2 f f f d d . . . 
    e e f d d e e e . f f d d . . . 
    e e e f f f f f . . . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 2 e . . . 
    . . . . . . 2 2 2 2 d 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 e f f c c 
    . . . . . e e 2 2 e f f f f b c 
    . . . e e e f e 2 2 b f f f d c 
    . . e e 2 2 d f e 2 1 1 1 1 b c 
    . . e e 2 2 d f e e e c c c . . 
    . . b 1 1 d e 2 2 e e c . . . . 
    . . . f f f d d 2 2 f d d . . . 
    . . . . f f d d e e f d d . . . 
    . . . . . f f f f f . . . . . . 
    . . . . e e e f f . . . . . . . 
    . . . . e e e e f f . . . . . . 
    `],
200,
true
)
