let list: number[] = []
basic.forever(function () {
    list = [4, 3, 2, 1, 0]
    for (let value of list) {
        led.plot(value, 4)
        basic.pause(100)
    }
    list = [0, 1, 2, 3, 4]
    for (let value of list) {
        led.plot(value, 3)
        basic.pause(100)
    }
    list = [4, 3, 2, 1, 0]
    for (let value of list) {
        led.plot(value, 2)
        basic.pause(100)
    }
    list = [0, 1, 2, 3, 4]
    for (let value of list) {
        led.plot(value, 1)
        basic.pause(100)
    }
    list = [4, 3, 2, 1, 0]
    for (let value of list) {
        led.plot(value, 0)
        basic.pause(100)
    }
    basic.clearScreen()
})
