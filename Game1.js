namespace SpriteKind {
    export const Block = SpriteKind.create()
    export const EmptyBlock = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Block, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.EmptyBlock)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EmptyBlock, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.setImage(img`
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . d 7 7 7 7 7 7 7 7 7 7 e . . 
            . . d d 7 7 7 7 7 7 7 7 e e . . 
            . . d d d 7 7 7 7 7 7 e e e . . 
            . . d d d d 7 7 7 7 e e e e . . 
            . . d d d d d 7 7 e e e e e . . 
            . . . d d d d d e e e e e . . . 
            . . . . d d d d e e e e . . . . 
            . . . . . d d d e e e . . . . . 
            . . . . . . d d e e . . . . . . 
            . . . . . . . d e . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.Block)
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
let NumbX = 166
let NumbY = 0
for (let index = 0; index < 12; index++) {
    for (let index = 0; index < 24; index++) {
        NumbX += -12
        mySprite = sprites.create(img`
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . d 7 7 7 7 7 7 7 7 7 7 e . . 
            . . d d 7 7 7 7 7 7 7 7 e e . . 
            . . d d d 7 7 7 7 7 7 e e e . . 
            . . d d d d 7 7 7 7 e e e e . . 
            . . d d d d d 7 7 e e e e e . . 
            . . . d d d d d e e e e e . . . 
            . . . . d d d d e e e e . . . . 
            . . . . . d d d e e e . . . . . 
            . . . . . . d d e e . . . . . . 
            . . . . . . . d e . . . . . . . 
            `, SpriteKind.Block)
        mySprite.setPosition(NumbX, NumbY)
    }
    NumbX = 172
    NumbY += 6
    for (let index = 0; index < 24; index++) {
        NumbX += -12
        mySprite = sprites.create(img`
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . d 7 7 7 7 7 7 7 7 7 7 e . . 
            . . d d 7 7 7 7 7 7 7 7 e e . . 
            . . d d d 7 7 7 7 7 7 e e e . . 
            . . d d d d 7 7 7 7 e e e e . . 
            . . d d d d d 7 7 e e e e e . . 
            . . . d d d d d e e e e e . . . 
            . . . . d d d d e e e e . . . . 
            . . . . . d d d e e e . . . . . 
            . . . . . . d d e e . . . . . . 
            . . . . . . . d e . . . . . . . 
            `, SpriteKind.Block)
        mySprite.setPosition(NumbX, NumbY)
    }
    NumbX = 166
    NumbY += 6
}
let mySprite2 = sprites.create(img`
    . . . f f . . .
    . . . f f . . .
    . . . f f . . .
    f f f . . f f f
    f f f . . f f f
    . . . f f . . .
    . . . f f . . .
    . . . f f . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite2, 50, 50)

