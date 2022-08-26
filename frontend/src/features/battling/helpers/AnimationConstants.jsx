/* MOVEMENT */
export const walkRight = {
  height: 64,
  width: 64,
  row: 12,
  frames: [0,1,2,3,4,5,6,7,8],
  repeat: true,  
}
export const walkLeft = {
  height: 64,
  width: 64,
  row: 10,
  frames: [0,1,2,3,4,5,6,7,8],
  repeat: true,
}
export const whiteHit = {
  height: 100,
  width: 100,
  row: 1,
  frames: [0,1,2,3,4,5,6,7],
  repeat: false,
  scale: 1,
  type: 'whiteHit',
}
export const fireHit = {
  height: 192,
  width: 192,
  row: 1,
  frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
  repeat: false,
  scale: 0.7,
  type: 'fireHit',
}


export function getAttackAnimation(type) {
  switch (type) {
    case 'pierceRight':
      return ({
        height: 64,
        width: 64,
        row: 8,
        frames: [0,1,2,3,4,5,6,7],
        repeat: false,
      })
    case 'bashRight':
      return ({
        height: 64,
        width: 64,
        row: 16,
        frames: [0,1,2,3,4,5],
        repeat: false,
      })
    case 'slashRight':
      return ({
        height: 192,
        width: 192,
        row: 11,
        frames: [0,1,2,3,4,5,0],
        repeat: false,
      })
    case 'rngAtkRight':
      return ({
        height: 64,
        width: 64,
        row: 20,
        frames: [0,1,2,3,4,5,6,7,8,9,10,11],
        repeat: false,
      })
    case 'magAtkRight':
      return ({
        height: 64,
        width: 64,
        row: 4,
        frames: [0,1,2,3,4,5],
        repeat: false,
      })
    case 'pierceLeft':
      return ({
        height: 64,
        width: 64,
        row: 6,
        frames: [0,1,2,3,4,5,6,7],
        repeat: false,
      })
    case 'bashLeft':
      return ({
        height: 64,
        width: 64,
        row: 14,
        frames: [0,1,2,3,4,5],
        repeat: false,
      })
    case 'slashLeft':
      return ({
        height: 192,
        width: 192,
        row: 9,
        frames: [0,1,2,3,4,5,0],
        repeat: false,
      })
    case 'rngAtkLeft':
      return ({
        height: 64,
        width: 64,
        row: 18,
        frames: [0,1,2,3,4,5,6,7,8,9,10,11],
        repeat: false,
      })
    case 'magAtkLeft':
      return ({
        height: 64,
        width: 64,
        row: 2,
        frames: [0,1,2,3,4,5],
        repeat: false,
      })
  }
}