enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const Entity = SpriteKind.create()
    export const Armor = SpriteKind.create()
}
namespace StatusBarKind {
    export const HP = StatusBarKind.create()
}
controller.combos.attachCombo("A+Left", function () {
    toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, -1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    tiles.setTileAt(tiles.getTileLocation(grid.spriteCol(Blockcursor2), grid.spriteRow(Blockcursor2)), assets.tile`myTile12`)
    tiles.setWallAt(tiles.getTileLocation(grid.spriteCol(Blockcursor2), grid.spriteRow(Blockcursor2)), true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(25, 18), assets.tile`transparency16`)
    ArmorSuitP1 = "yes"
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile79`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(39, 18), assets.tile`transparency16`)
    ArmorSuitP2 = "yes"
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setCurrentTilemap(Generation._pickRandom())
    grid.place(Blockcursor1, tiles.getTileLocation(2, 14))
    grid.place(Kalan, tiles.getTileLocation(2, 13))
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (Blockcursor2.overlapsWith(Kalan)) {
        HP.value += -10
    } else if (Blockcursor2.overlapsWith(Wolf)) {
        Wolf.destroy(effects.halo, 500)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 0) {
        tiles.setTileAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), assets.tile`myTile10`)
        tiles.setWallAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), true)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 67, 67, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    } else if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 1) {
        tiles.setTileAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), assets.tile`myTile17`)
        tiles.setWallAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), false)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 67, 67, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    } else if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 2) {
        tiles.setWallAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), true)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3277, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        tiles.setTileAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), assets.tile`myTile41`)
    } else if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 3) {
        if (Blockcursor1.overlapsWith(Wolf)) {
            music.smallCrash.play()
            Wolf.destroy(effects.halo, 500)
            Bone.destroy(effects.halo, 500)
        } else if (Blockcursor1.overlapsWith(Simon)) {
            statusbar.value += -10
        }
    } else if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 4) {
        animation.runImageAnimation(
        Kalan,
        [img`
            ................
            ................
            ................
            ................
            ................
            ................
            ....ffffff......
            ...feeeeeef.....
            ...ffffffff.....
            ...fddfdfdf.....
            ...fddfdfdf.....
            ...ffddddff.....
            ...fdffffdf.....
            .ff.ffffff.ff...
            f66f666666f66f..
            f66f666666f66f..
            ffff666666ffff..
            fddf666666fddf..
            fddf666666fddff.
            fddffffffffddf8f
            .fff88ff88fffff8
            ...f88ff88feeee8
            ...f88ff88fffff8
            ...ffffffff..f8f
            ...ffffffff..ff.
            ....ffffff......
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ......ffffff....
            .....feeeeeef...
            .....ffffffff...
            .....fddfdfdf...
            .....fddfdfdf...
            .....ffddddff...
            .....fdffffdf...
            ...ff.ffffff.ff.
            ..f66f666666f66f
            ..f66f666666f66f
            ..ffff666666ffff
            ..fddf666666fddf
            ..fddf666666fddf
            ..fddffffffffddf
            ...fff88ff88fff.
            .....f88ff88f...
            .....f88ff88f...
            .....ffffffff...
            .....ffffffff...
            ......ffffff....
            `],
        100,
        false
        )
        tiles.setTileAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(grid.spriteCol(Blockcursor1), grid.spriteRow(Blockcursor1)), false)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 5) {
        Bone.destroy(effects.trail, 500)
        Wolf.setImage(assets.image`Tamed Wolf`)
        Wolf.follow(Kalan)
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor1, 0, -1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (sprite == Kalan) {
        HP.value += -1
    } else if (sprite == Simon) {
        statusbar.value += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Simon.y += -30
    if (ArmorSuitP2 == "yes") {
        animation.runImageAnimation(
        Simon,
        assets.animation`myAnim16`,
        500,
        false
        )
    } else {
        animation.runImageAnimation(
        Simon,
        assets.animation`myAnim15`,
        500,
        false
        )
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    grid.move(Blockcursor2, 0, 1)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor1, 1, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (sprite == Kalan) {
        HP.value += -1
    } else if (sprite == Simon) {
        statusbar.value += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setCurrentTilemap(Generation._pickRandom())
    grid.place(Blockcursor1, tiles.getTileLocation(2, 14))
    grid.place(Kalan, tiles.getTileLocation(2, 13))
})
function Jump () {
    Kalan.y += -30
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    if (ArmorSuitP1 == "yes") {
        animation.runImageAnimation(
        Kalan,
        assets.animation`myAnim17`,
        500,
        false
        )
    } else {
        animation.runImageAnimation(
        Kalan,
        assets.animation`myAnim14`,
        500,
        false
        )
    }
}
scene.onHitWall(SpriteKind.Entity, function (sprite, location) {
    Wolf.y += -30
})
controller.combos.attachCombo("A+Right", function () {
    toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    grid.move(Blockcursor2, 0, -1)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.splash("You Died!", "Press (A) To Respawn")
    grid.place(Blockcursor1, tiles.getTileLocation(2, 14))
    grid.place(Kalan, tiles.getTileLocation(2, 13))
    HP.value = 100
    info.changeLifeBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    grid.move(Blockcursor2, 1, 0)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor2, 0, -1)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Repeated, function () {
    tiles.setTileAt(tiles.getTileLocation(grid.spriteCol(Blockcursor2), grid.spriteRow(Blockcursor2)), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(grid.spriteCol(Blockcursor2), grid.spriteRow(Blockcursor2)), false)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor2, -1, 0)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor1, 0, 1)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    profilelife.setInvisible(false)
    HP.positionDirection(CollisionDirection.Top)
    Blockcursor2.destroy(effects.halo, 500)
    Simon.destroy(effects.halo, 500)
    game.showLongText("" + P1Name + ": " + "Bye " + P2Name + "!", DialogLayout.Bottom)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    saveFormat = pwsave.create()
    pwsave.splashPassword(saveFormat)
    AskQuestionForPassword = pwsave.promptForPassword(saveFormat)
    if (AskQuestionForPassword == true) {
        GetNewPassword = saveFormat.getPassword()
    } else {
    	
    }
})
info.onLifeZero(function () {
    game.splash("" + P1Name + " " + "Has Went To The Shadow Realm!")
    Kalan.destroy(effects.halo, 500)
    toolbar.destroy(effects.disintegrate, 500)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    grid.move(Blockcursor2, -1, 0)
})
statusbars.onZero(StatusBarKind.HP, function (status) {
    info.player2.changeLifeBy(-1)
    grid.place(Blockcursor2, tiles.getTileLocation(2, 14))
    grid.place(Simon, tiles.getTileLocation(2, 13))
    statusbar.value = 100
})
info.player2.onLifeZero(function () {
    game.splash("" + P2Name + " " + "Has Went To The Shadow Realm!")
    Simon.destroy(effects.halo, 500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Blockcursor2 = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.Cursor)
    splitScreen.splitScreenCameraFollow(Blockcursor2)
    Simon.follow(Blockcursor2, 75)
    Simon.setFlag(SpriteFlag.Invisible, false)
    info.player2.setLife(3)
    P2Name = game.askForString("")
    statusbar = statusbars.create(20, 4, StatusBarKind.HP)
    statusbar.attachToSprite(Simon)
    profilelife.setInvisible(true)
    HP.attachToSprite(Kalan)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor2, 1, 0)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor1, -1, 0)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Repeated, function () {
    grid.move(Blockcursor2, 0, 1)
})
let GetNewPassword = ""
let AskQuestionForPassword = false
let saveFormat: pwsave.PasswordData = null
let P2Name = ""
let statusbar: StatusBarSprite = null
let ArmorSuitP2 = ""
let ArmorSuitP1 = ""
let Blockcursor2: Sprite = null
let P1Name = ""
let Simon: Sprite = null
let HP: StatusBarSprite = null
let toolbar: Inventory.Toolbar = null
let Kalan: Sprite = null
let Blockcursor1: Sprite = null
let Generation: tiles.TileMapData[] = []
let Bone: Sprite = null
let Wolf: Sprite = null
color.setColor(6, color.rgb(51, 153, 255))
color.setColor(9, color.rgb(153, 204, 255))
color.setColor(8, color.rgb(0, 0, 255))
color.setColor(13, color.rgb(255, 204, 153))
color.setColor(14, color.rgb(102, 51, 0))
color.setColor(7, color.rgb(0, 255, 0))
color.setColor(3, color.rgb(255, 102, 178))
color.setColor(4, color.rgb(255, 108, 0))
Wolf = sprites.create(assets.image`Wolf`, SpriteKind.Entity)
Bone = sprites.create(assets.image`myImage0`, SpriteKind.Cursor)
Wolf.setFlag(SpriteFlag.Invisible, true)
Generation = [
tilemap`level2`,
tilemap`level1`,
tilemap`level4`,
tilemap`level5`,
tilemap`level11`,
tilemap`level13`,
tilemap`level27`
]
Bone.setFlag(SpriteFlag.Invisible, true)
Wolf.follow(Bone, 75)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddfffffddddddddddddddfffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffddddddddddddddddddddddddffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffddddddddddddddddddddddddffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffddddddddddddddddddddddddffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffddddddddddddddddddddddddffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffddddddddddddddddddddddddffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666ffffffffffffffddddddddddddddddddddddddffffffffffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddffffffffffffffffffffffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddffffffffffffffffffffffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddffffffffffffffffffffffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddffffffffffffffffffffffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddffffffffffffffffffffffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666fffffffdddddddffffffffffffffffffffffffdddddddfffff6666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666
    66666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666
    66666666666666666666666666666666fff6666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666666666
    66666666666666666666666666666666fff6666666fff666666666666666666666666666666666666666666666666666666666666666666666666fff666ffffff6666666666666666666666666666666
    66666666666666666666666666666666fff666666ffff66666666666666fff666666666fff6666666666666666666666666666666666666666666fff66ffffffff666666666666666666666666666666
    66666666666666666666666666666666fff66666fffff6666666666666ffff666666666fff66666666666666666fff66666666666666666666666fff66fffffffff66666666666666666666666666666
    66666666666666666666666666666666fff666ffffff6666666666666fffff666666666fff6666666666666666ffff6666666666fff66666fff66fff6ffff66ffff66666666666666666666666666666
    66666666666666666666666666666666fff66ffffff6666666666666ffffff666666666fff666666666666666fffff6666666666ffff6666fff666666ffff666fff66666666666666666666666666666
    66666666666666666666666666666666fff6ffffff66666666666666fffffff66666666fff666666666666666ffffff666666666ffff6666fff66666ffff6666fff66666666666666666666666666666
    66666666666666666666666666666666ffffffff666666666666666ffffffff66666666fff66666666666666fffffff666666666fffff666fff66666fffff66666666666666666666666666666666666
    66666666666666666666666666666666fffffff666666666666666fffff6fff66666666fff6666666666666fffffffff66666666ffffff66fff66666fffffff666666666666666666666666666666666
    66666666666666666666666666666666ffffff666666666666666fffff66fff66666666fff666666666666fffff6ffff66666666ffffff66fff666666fffffff66666666666666666666666666666666
    66666666666666666666666666666666fffff666666666666666fffff666ffff6666666fff666666666666ffff666fff66666666fffffff6fff66666666ffffff6666666666666666666666666666666
    66666666666666666666666666666666fffffff666666666666fffff6666ffff6666666fff66666666666ffffffffffff6666666fffffffffff6666666666ffff6666666666666666666666666666666
    66666666666666666666666666666666ffffffff66666666666fffffffffffff6666666fff6666666666fffffffffffff6666666fff6fffffff66666666666ffff666666666666666666666666666666
    66666666666666666666666666666666fffffffff666666666fffffffffffffff666666fff666666666fffffffffffffff666666fff66ffffff66666666666ffff666666666666666666666666666666
    66666666666666666666666666666666fff66ffffff666666ffffffffffffffff666666fff666666666ffff6666666ffff666666fff66ffffff66666666666ffff666666666666666666666666666666
    66666666666666666666666666666666fff666ffffff66666ffff666666666fff666666ffffffff666ffff666666666ffff66666fff666fffff666666666ffffff666666666666666666666666666666
    66666666666666666666666666666666fff6666ffffff6666fff6666666666ffff66666ffffffff666ffff666666666ffff66666fff6666ffff6666ffffffffff6666666666666666666666666666666
    66666666666666666666666666666666fff666666ffff66666666666666666ffff66666ffffffff666fff66666666666fff66666fff6666ffff6666fffffffff66666666666666666666666666666666
    66666666666666666666666666666666fff6666666fff666666666666666666fff66666666666666666666666666666666666666fff66666fff6666fffffff6666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666fff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666ffffffff66666666666666666ffff66666666666666666666666666666666666666666666666666666666fffff6666666666666666666666666666666
    666666666666666666666666666666666666666ffffffffff666666666666666ffff666666666666666666666666666666666666666666666666666666fffffffff66666666666666666666666666666
    66666666666666666666666666666666666666fffffffffff66666666666666fffff6666666666666666fff66666666666666666666666666666666666fffffffff66666666666666666666666666666
    66666666666666666666666666666666666666ffff666ffff66666666666666fffff666666666666666ffff666666fff66666666ffffffff6666666666ffff6ffff66666666666666666666666666666
    6666666666666666666666666666666666666ffff66666fff6666666666666fffffff6666666666666fffff66666ffff66666666ffffffff6666666666fff66666666666666666666666666666666666
    6666666666666666666666666666666666666ffff666666666666666666666fffffff6666666666666ffffff666fffff66666666ffffffff6666666666fff66666666666666666666666666666666666
    6666666666666666666666666666666666666fff666666666666666666666ffff6fff666666666666fffffff66fffffff6666666fffff6666666666666fff66666666666666666666666666666666666
    6666666666666666666666666666666666666fff66666666666666666666fffff6ffff6666666666fffffffffffffffff6666666fff666666666666666fff66666666666666666666666666666666666
    6666666666666666666666666666666666666fff6666ffffffff66666666ffffffffff666666666fffff6ffffffff6ffff666666fff666666666666666ffff6666666666666666666666666666666666
    6666666666666666666666666666666666666fff6666ffffffff6666666ffffffffffff6666666fffff666ffffff66ffff666666ffffffff6666666666ffffff66666666666666666666666666666666
    6666666666666666666666666666666666666ffff666ffffffff6666666ffffffffffff6666666ffff66666ffff6666ffff66666ffffffff66666666666fffffff666666666666666666666666666666
    6666666666666666666666666666666666666ffff6666fffffff666666ffff666666fff666666ffff66666666666666ffff66666ffffffff666666666666ffffff666666666666666666666666666666
    66666666666666666666666666666666666666fff6666666ffff666666ffff666666ffff66666ffff666666666666666ffff6666fff6666666666666666666ffff666666666666666666666666666666
    66666666666666666666666666666666666666fff6666666ffff666666fff6666666ffff66666fff6666666666666666ffff6666fff66666666666666666666fff666666666666666666666666666666
    66666666666666666666666666666666666666ffff666666fff6666666fff66666666fff6666666666666666666666666fff6666fff666666666666fff66666fff666666666666666666666666666666
    66666666666666666666666666666666666666ffffff6ffffff66666666666666666666666666666666666666666666666666666fffffffff666666ffff6666fff666666666666666666666666666666
    666666666666666666666666666666666666666ffffffffffff66666666666666666666666666666666666666666666666666666fffffffff666666ffff666ffff666666666666666666666666666666
    6666666666666666666666666666666666666666ffffffffff666666666666666666666666666666666666666666666666666666fffffffff6666666ffffffffff666666666666666666666666666666
    666666666666666666666666666666666666666666fffff6666666666666666666666666666666666666666666666666666666666666666666666666fffffffff6666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff66666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
pause(5000)
scene.setBackgroundImage(assets.image`menu`)
pause(5000)
Achievements.showAchievement(
"First Played Game!",
"PLayed Game For The 1st Time!"
)
tiles.setCurrentTilemap(Generation._pickRandom())
scene.setBackgroundColor(0)
scene.setBackgroundImage(assets.image`Controls`)
Blockcursor1 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Cursor)
scene.cameraFollowSprite(Blockcursor1)
splitScreen.splitScreenCameraFollow(Kalan)
grid.moveWithButtons(Blockcursor1)
grid.place(Blockcursor1, tiles.getTileLocation(2, 14))
Kalan = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ....ffffff......
    ...feeeeeef.....
    ...ffffffff.....
    ...fddfdfdf.....
    ...fddfdfdf.....
    ...ffddddff.....
    ...fdffffdf.....
    .ff.ffffff.ff...
    f66f666666f66f..
    f66f666666f66f..
    ffff666666ffff..
    fddf666666fddf..
    fddf666666fddf..
    fddffffffffddf..
    .fff88ff88fff...
    ...f88ff88f.....
    ...f88ff88f.....
    ...ffffffff.....
    ...ffffffff.....
    ....ffffff......
    `, SpriteKind.Player)
Kalan.follow(Blockcursor1, 75)
toolbar = Inventory.create_toolbar([
Inventory.create_item("Wood", img`
    e e e e e e e e e e e e e e e e 
    e d d d d d d d d d d e d d d e 
    e d d d d d d d d d d e d d d e 
    e e e e e e e e e e e e e e e e 
    e d d d e d d d d d d d d d d e 
    e d d d e d d d d d d d d d d e 
    e e e e e e e e e e e e e e e e 
    e d d d d d d e d d d d d d d e 
    e d d d d d d e d d d d d d d e 
    e e e e e e e e e e e e e e e e 
    e d d d d d d d d d e d d d d e 
    e d d d d d d d d d e d d d d e 
    e e e e e e e e e e e e e e e e 
    e d d e d d d d d d d d d d d e 
    e d d e d d d d d d d d d d d e 
    e e e e e e e e e e e e e e e e 
    `),
Inventory.create_item("Workbench", img`
    f f f f f f f f f f f f f f f f 
    f d d f d d f d d f d d f d d f 
    f f f f f f f f f f f f f f f f 
    e e e e e e e e e e e e e e e e 
    e d d d 2 2 2 2 d d d 2 d d d e 
    e e e e 2 e e 2 e e e 2 e e e e 
    e d d d 2 2 2 2 d d d 2 d d d e 
    e e e e b b b e e e e 2 e e e e 
    e d d d b b b d d d d 2 d d d e 
    e e e e b b b e e e e 2 e e e e 
    e d d d b b b d d d d 2 d d d e 
    e e e e b b e e e e e 2 e b e e 
    e d d d b d d d b b b b b b d e 
    e e e e e e e e e b b b b b e e 
    e d d d d d d d d d d d d b d e 
    e e e e e e e e e e e e e e e e 
    `),
Inventory.create_item("Blue Brick Block", img`
    6 d 6 6 6 6 6 6 6 d 6 6 6 6 6 6 
    6 d 6 6 6 6 6 6 6 d 6 6 6 6 6 6 
    6 d 6 6 6 6 6 6 6 d 6 6 6 6 6 6 
    d d d d d d d d d d d d d d d d 
    6 6 6 6 6 d 6 6 6 6 6 6 6 d 6 6 
    6 6 6 6 6 d 6 6 6 6 6 6 6 d 6 6 
    6 6 6 6 6 d 6 6 6 6 6 6 6 d 6 6 
    d d d d d d d d d d d d d d d d 
    6 d 6 6 6 6 6 6 6 d 6 6 6 6 6 6 
    6 d 6 6 6 6 6 6 6 d 6 6 6 6 6 6 
    6 d 6 6 6 6 6 6 6 d 6 6 6 6 6 6 
    d d d d d d d d d d d d d d d d 
    6 6 6 6 6 d 6 6 6 6 6 6 6 d 6 6 
    6 6 6 6 6 d 6 6 6 6 6 6 6 d 6 6 
    6 6 6 6 6 d 6 6 6 6 6 6 6 d 6 6 
    d d d d d d d d d d d d d d d d 
    `),
Inventory.create_item("Sapphire Sword", img`
    . . . . . . . f . . . . . . . . 
    . . . . . . f 8 f . . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . . f 8 8 8 f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    `),
Inventory.create_item("Sapphire Pickaxe", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f f 8 8 8 8 8 f f . . . 
    . . . . f 8 f f e f f 8 f . . . 
    . . . . f f . f e f . f f . . . 
    . . . . . . . f e f . . . . . . 
    . . . . . . . f e f . . . . . . 
    . . . . . . . f e f . . . . . . 
    . . . . . . . f e f . . . . . . 
    . . . . . . . f e f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `),
Inventory.create_item("Bone", assets.image`myImage0`)
], 6)
let Multiplayer = false
Blockcursor1.setFlag(SpriteFlag.GhostThroughTiles, true)
HP = statusbars.create(20, 4, StatusBarKind.Health)
HP.setLabel("HP")
HP.positionDirection(CollisionDirection.Left)
HP.positionDirection(CollisionDirection.Top)
Simon = sprites.create(assets.image`myImage`, SpriteKind.Player)
Simon.setFlag(SpriteFlag.Invisible, true)
profilelife.setFilledLifeImage(img`
    . . f f . . . f f . . 
    . f 2 2 f . f 2 2 f . 
    f 2 2 2 2 f 2 1 2 2 f 
    f 2 2 2 2 2 2 2 1 2 f 
    f 2 2 2 2 2 2 2 2 2 f 
    . f 2 2 2 2 2 2 2 f . 
    . . f 2 2 2 2 2 f . . 
    . . . f 2 2 2 f . . . 
    . . . . f 2 f . . . . 
    . . . . . f . . . . . 
    `)
profilelife.setEmptyLifeImage(assets.image`myImage1`)
P1Name = game.askForString("Name")
profilelife.setName(P1Name)
Bone.setFlag(SpriteFlag.Invisible, false)
Wolf.setFlag(SpriteFlag.Invisible, false)
game.onUpdate(function () {
    Kalan.vy = 100
    Wolf.vy = 100
})
forever(function () {
    Simon.vy = 100
    Kalan.vy = 100
})
forever(function () {
    if (ArmorSuitP1 == "yes") {
        characterAnimations.loopFrames(
        Kalan,
        assets.animation`myAnim8`,
        100,
        characterAnimations.rule(Predicate.Moving)
        )
        characterAnimations.loopFrames(
        Kalan,
        assets.animation`myAnim9`,
        500,
        characterAnimations.rule(Predicate.NotMoving)
        )
    } else {
        characterAnimations.loopFrames(
        Kalan,
        assets.animation`myAnim12`,
        100,
        characterAnimations.rule(Predicate.Moving)
        )
        characterAnimations.loopFrames(
        Kalan,
        assets.animation`myAnim13`,
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
})
forever(function () {
    if (ArmorSuitP2 == "yes") {
        characterAnimations.loopFrames(
        Simon,
        assets.animation`myAnim11`,
        100,
        characterAnimations.rule(Predicate.Moving)
        )
        characterAnimations.loopFrames(
        Simon,
        assets.animation`myAnim10`,
        500,
        characterAnimations.rule(Predicate.NotMoving)
        )
    } else {
        characterAnimations.loopFrames(
        Simon,
        assets.animation`myAnim5`,
        100,
        characterAnimations.rule(Predicate.Moving)
        )
        characterAnimations.loopFrames(
        Simon,
        assets.animation`myAnim7`,
        500,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
})
forever(function () {
    Music.CatQuestVo2(CatQuestVo2en.Jumpy)
})
forever(function () {
    toolbar.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) + 44)
})
forever(function () {
    Kalan.vy = 100
    Simon.vy = 100
})
forever(function () {
    profilelife.setProfileImage(Kalan.image)
    profilelife.setTextColor(15)
})
forever(function () {
    if (info.life() == 0) {
        Kalan.setImage(img`
            ....ffffff......
            ...f111111f.....
            ...ffffffff.....
            ...f11f1f1f.....
            ...f111111f.....
            ...f1ffff1f.....
            ...ff1111ff.....
            .ff.ffffff.ff...
            f11f111111f11f..
            f11f111111f11f..
            ffff111111ffff..
            f11f111111f11f..
            f11f111111f11f..
            f11ffffffff11f..
            .fff111111fff...
            ...f111111f.....
            .fff111111f.....
            .f1111111f......
            ..f11111f.......
            ...fffff........
            ................
            ................
            ................
            ................
            ................
            ................
            `)
    }
})
forever(function () {
    if (info.life() == 0) {
        transformSprites.changeRotation(Kalan, 5)
        transformSprites.changeRotation(Kalan, -5)
    }
})
forever(function () {
    if (blockMenu.isMenuOpen()) {
    	
    } else {
        grid.place(Bone, tiles.getTileLocation(randint(0, 50), randint(0, 30)))
        effects.clearParticles(Wolf)
        effects.clearParticles(Bone)
    }
})
