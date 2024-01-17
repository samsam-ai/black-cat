controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player2.moveSprite(Movement)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Movement, 100, 100)
})
let Movement: Sprite = null
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("E D C D E F G A ", 120), music.PlaybackMode.LoopingInBackground)
