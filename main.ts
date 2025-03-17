controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    answer = randint(1, 8)
    if (answer == 1) {
        _8_Ball.sayText("It’s looking like a yes.")
    } else if (answer == 2) {
        _8_Ball.sayText("I think so, for sure.")
    } else if (answer == 3) {
        _8_Ball.sayText("That is a yes.")
    } else if (answer == 4) {
        _8_Ball.sayText("I don’t think that’ll happen.")
    } else if (answer == 5) {
        _8_Ball.sayText("Probably not.")
    } else if (answer == 6) {
        _8_Ball.sayText("I doubt it.")
    } else if (answer == 7) {
        _8_Ball.sayText("It could go either way.")
    } else {
        _8_Ball.sayText("Hard to tell right now.")
    }
})
let answer = 0
let _8_Ball: Sprite = null
_8_Ball = sprites.create(img`
    ...............bbbbbbbbbbbbbbbbbbb...............
    ...........bbbbdd111111111111111ddbbbb...........
    ........bbbd1111111111111111111111111dbbb........
    ......bbd11111111dddddddddddddd111111111dbb......
    ....bbd1111111ddd11111111111111dddd1111111dbb....
    ...bd111111ddd111111111111111111111ddd111111db...
    ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
    .bd11111dd111dddd111111111111111dddd111dd11111db.
    .b11111d111ddd111111fffffffff111111ddd111d11111b.
    bd11111d1ddd11111111ffff1ffff11111111ddd1111111db
    b11111d1ddd11111111ffff1f1ffff11111111ddd1d11111b
    b11111ddddd11111111ffff1f1ffff11111111ddddd11111b
    b11111ddddd11111111fffff1fffff11111111dddbd11111b
    b111111dddd11111111ffff1f1ffff11111111dddb111111b
    bd111111dddd1111111ffff1f1ffff1111111dddbd11111db
    .b1111111dddd1111111ffff1ffff1111111dddbd111111b.
    .bd1111111dbbdd11111fffffffff11111dddbbd111111db.
    ..bd11111111dbbdd111111111111111dddbbd1111111db..
    ...bd111111111dbbbbbbdddddddddddddd111111111db...
    ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
    ......bbdd11111111111111111111111111111ddbb......
    ........bbbdd11111111111111111111111ddbbb........
    ...........bbbbbddd11111111111dddbbbbb...........
    ................bbbbbbbbbbbbbbbbb................
    `, SpriteKind.Player)
_8_Ball.setPosition(81, 98)
game.splash("Think of a question.")
