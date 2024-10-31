player.onTravelled(WALK, function () {
    music.playSound(Sound.CatMeow)
})
loops.forever(function () {
    player.say("This is very annoying, isn't it!")
})
player.onTravelled(SNEAK, function () {
    music.playSound(Sound.Cow)
})
music.playMusic(MusicDisc.Thirteen)
