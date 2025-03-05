import { stdout } from 'node:process'

// 1 line animation function
function loadAnimation(animArr) {
    let index = 0;
    const cycler = animArr.length - 1
    const timerId = setInterval(() => {
        stdout.write('\r' + animArr[index++])
        index &= cycler
    }, 250)
    return timerId
}
// Example: Run loading animation for 3 seconds
//      const animID = loadAnimation(dots)
//      setTimeout(clearInterval, 3000, animID)

// 2x2 animation function
function loadSquareAnim2(animArr) {
    let index = 0
    const cycler = animArr.length - 1
    stdout.write('\n')
    const timerId = setInterval(() => {
        stdout.moveCursor(-2,-1)
        stdout.write(animArr[index++])
        index &= cycler
    }, 500)
    return timerId
}
// Example: Run loading animation for 3 seconds
//      const animSqr = loadSquareAnim2(xBox)
//      setTimeout(clearInterval, 3000, animSqr)

// 4x4 animation
function loadFourSqr(animArr) {
    let i = 0
    const size = animArr.length - 1
    stdout.write('\n\n\n')
    const timerId = setInterval(() => {
        stdout.moveCursor(-4,-3)
        stdout.write(animArr[i++])
        i &= size
    }, 250)
    return timerId
}

// Clock animator
function clockinator(animArr) {
    let i = 0
    const size = animArr.length - 1
    stdout.write('\n\n\n\n')
    const timerId = setInterval(() => {
        stdout.moveCursor(-5,-4)
        stdout.write(animArr[i++])
        i &= size
    }, 200)
    return timerId
}

export {
    loadAnimation,
    loadSquareAnim2,
    clockinator,
    loadFourSqr
}