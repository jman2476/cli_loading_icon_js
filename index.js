import { line_spin, dots, circle_expand} from './assets/animations.js'
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

const timer = (function(array) {
    let x = 0
    const cycle = array.length - 1
    const timerId = setInterval(function() {
        stdout.write('\r' + array[x++])
        x &= cycle
    }, 250)
    return timerId
})(line_spin)

setTimeout(clearInterval, 2000, timer)