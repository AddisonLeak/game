let roll = 0
input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    if (roll == 1) {
        basic.showString("Pushups ")
    } else if (roll == 2) {
        basic.showString("Jumping jacks")
    } else if (roll == 3) {
        basic.showString("Sit-ups ")
    } else if (roll == 4) {
        basic.showString("Heel touches")
    } else if (roll == 5) {
        basic.showString("Lunges")
    } else if (roll == 6) {
        basic.showString("Squats ")
    }
})
