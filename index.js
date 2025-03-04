import { line_spin, dots, circle_expand, spin_waves} from './assets/animations.js'
import {stdout} from 'node:process' 

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
    }, 250)
    return timerId
}
// Example: Run loading animation for 3 seconds
//      const animSqr = loadSquareAnim2(spin_waves)
//      setTimeout(clearInterval, 3000, animSqr)

export {
    loadAnimation,
    loadSquareAnim2
}