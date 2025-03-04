import {loadAnimation, loadSquareAnim2} from './index.js'
import {dots} from './assets/animations.js'
import child_process from 'node:child_process'

const sleeper = child_process.spawn('sleep', [10])
const animID = loadAnimation(dots)

sleeper.stdout.on('close', () => clearInterval(animID))
