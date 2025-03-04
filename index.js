import { line_spin, dots, circle_expand, spin_waves} from './assets/animations.js'
import {stdout} from 'node:process' 

function animate(arr) {
    console.time()
    console.group()
    const length = arr.length
    for(let i = 0; i < length*2; i++){
        console.log('\r' + arr[i%length])
    }
    // console.clear()
    console.groupEnd()
    console.timeEnd()
}

// animate(line_spin)
// animate(circle_expand)
// animate(dots)

// const twirlTimer = (function() {
//     const P = ["\\", "|", "/", "-"];
//     let x = 0;
//     return setInterval(function() {
//       process.stdout.write("\r" + P[x++]);
//       x &= 3;
//     }, 250);
//   })();

// 1x1 animation
// const timer = (function(array) {
//     let x = 0
//     const cycle = array.length - 1
//     const timerId = setInterval(function() {
//         stdout.write('\r' + array[x++])
//         x &= cycle
//     }, 250)
//     return timerId
// })(circle_expand)

// setTimeout(clearInterval, 2000, timer)


// 2x2 animation
// const twoBy2 = (function(array2By) {
//     let x = 0
//     const cycle = array2By.length - 1
//     const timerId = setInterval(function() {
//         stdout.write(array2By[x++])
//         stdout.moveCursor(-2,-1)
//         x &= cycle
//     }, 250)
//     return timerId
// })(spin_waves)

// setTimeout(clearInterval, 2000, twoBy2)

// TODO: write non IIFE version of 1 line animation function
function waitingAnimation(animArr) {
    let index = 0;
    const cycler = animArr.length - 1
    const timerId = setInterval(() => {
        stdout.write('\r' + animArr[index++])
        index &= cycler
    }, 250)
    return timerId
}

const animID = waitingAnimation(dots)
setTimeout(clearInterval, 3000, animID)