import { funcs, frames } from './src/'
import child_process from 'node:child_process'

const sleeper = child_process.spawn('sleep', [10])
const animID = funcs.loadAnimation(frames.dots)

sleeper.stdout.on('close', () => clearInterval(animID))
