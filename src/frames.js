// 4 frame animations
const line_spin = ['/','-','\\','|']
const dots = ['.   ', '..  ', '... ', '....']

// 8 frame animations
const circle_expand = ['.', ',', '\'','*','o','0','O',"@"]

// 2x2 4 frame animation
const xBox = ['Xx\nxx', 'xX\nxx', 'xx\nxX', 'xx\nXx']

// fan animation
const fan = ['\\/\n/\\', '_|\n|-','\\/\n/\\', '_|\n|-','\\/\n/\\', '_|\n|-','\\/\n/\\', '_|\n|-']
const orb = ['0O\no.', '0O\no.', 'o0\n.O', 'o0\n.O', '.o\nO0', '.o\nO0', 'O.\n0o', 'O.\n0o']
const ldLOA = ['LO\nDA', 'LO\nDA', 'DL\nAO', 'DL\nAO', 'AD\nLO', 'AD\nLO', 'OA\nLD', 'OA\nLD']
const mill = ['\\ \n  ', ' |\n  ', ' /\n  ', ' _\n  ', '  \n \\', '  \n |', '  \n/ ', '_ \n  ']

// 4x4 animation
const runX = [
    'X   \n    \n    \n    ',
    ' X  \n    \n    \n    ',
    '  X \n    \n    \n    ',
    '   X\n    \n    \n    ',
    '    \n   X\n    \n    ',
    '    \n  X \n    \n    ',
    '    \n X  \n    \n    ',
    '    \nX   \n    \n    ',
    '    \n    \nX   \n    ',
    '    \n    \n X  \n    ',
    '    \n    \n  X \n    ',
    '    \n    \n   X\n    ',
    '    \n    \n    \n   X',
    '    \n    \n    \n  X ',
    '    \n    \n    \n X  ',
    '    \n    \n    \nX   ',
]

// clock animation
const clock = [
    ` 12_ \n_   _\n_   _\n_   _\n ___ `,
    ` __1 \n_   _\n_   _\n_   _\n ___ `,
    ` ___ \n_   2\n_   _\n_   _\n ___ `, 
    ' ___ \n_   _\n_   _\n_   _\n ___ ',
    ` ___ \n_   _\n_   3\n_   _\n ___ `,
    ` ___ \n_   _\n_   _\n_   4\n ___ `,
    ` ___ \n_   _\n_   _\n_   _\n __5 `, 
    ' ___ \n_   _\n_   _\n_   _\n ___ ',
    ` ___ \n_   _\n_   _\n_   _\n _6_ `,
    ` ___ \n_   _\n_   _\n_   _\n 7__ `,
    ` ___ \n_   _\n_   _\n8   _\n ___ `, 
    ' ___ \n_   _\n_   _\n_   _\n ___ ',
    ` ___ \n_   _\n9   _\n_   _\n ___ `,
    ` ___ \n10  _\n_   _\n_   _\n ___ `,
    `11__ \n_   _\n_   _\n_   _\n ___ `, 
    ' ___ \n_   _\n_   _\n_   _\n ___ '
]
export {
    line_spin,
    dots,
    circle_expand,
    xBox,
    fan,
    orb,
    ldLOA,
    mill,
    clock,
    runX
}