import { line_spin, dots, circle_expand} from './assets/animations.js'
// import process from 'node:process' 

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

const understandingBitwise = (function() {
    try {for (let i = 0; i < 16; i++){
        // for (let j = 0; j < 5; j++){
            let k = i&15;
            process.stdout.write(`${i} ${k}` + '\n')
            process.stdout.write('---\n')
        // }
    }} catch(err) {
        console.log(err)
        process.stderr.write(err + '\n')
    }
})

console.time('clog')
console.log('Helloweruldo')
console.timeEnd('clog')

console.time('stdout')
process.stdout.write('Helloweruldo\n')
console.timeEnd('stdout')