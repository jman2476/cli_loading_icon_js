import { 
    frames, functions} from './src/'
import child_process from 'node:child_process'

const sleeper = child_process.spawn('sleep', [10])
const animID = functions.loadFourSqr(frames.runX)

sleeper.stdout.on('close', () => {
    clearInterval(animID)
    process.stdout.write('\nProcess complete')
})


// const sleeper = child_process.spawn('sleep', [10])
// const animID = loadAnimation(circle_expand)

// sleeper.stdout.on('close', () => {
//     clearInterval(animID)
//     process.stdout.write('\nProcess complete')
// })

// const sleepy2 = child_process.spawn('sleep', [10])
// const anim2ID = loadSquareAnim2(xBox)

// sleepy2.stdout.on('close', () => clearInterval(anim2D))

// const fionjamin = child_process.spawn('sleep', [10])
// const twoJamin = loadSquareAnim2(mill)

// fionjamin.stdout.on('close', () => clearInterval(twoJamin))