//function to return characters,stats,moves
export function getCharacterData(character) {
    const moveAccFront = [92,79,72]
    const expValFront = 30
    const moveAccBack = [89,82,74]
    const expValBack = 30
    const moveAccFull = [91,83,71]
    const expValFull = 30

    switch (character) {
        //stats should sum to 7
        case 'frontend':
            return ({
                'CLASS':'frontend',
                'MOVES':[ {'name':'Sword Attack', 'label':'slashRight', 'type':'melee', 'power':Math.round((expValFront*100)/moveAccFront[0]), 'accuracy':moveAccFront[0]},
                          {'name':'Arrow Attack', 'label':'rngAtkRight', 'type':'ranged', 'power':Math.round((expValFront*100)/moveAccFront[1]), 'accuracy':moveAccFront[1]},
                          {'name':'Magic Attack', 'label':'magAtkRight', 'type':'magic', 'power':Math.round((expValFront*100)/moveAccFront[2]), 'accuracy':moveAccFront[2]} ],
                'STATS':{
                    'strength': 3, 
                    'defense': 1,
                    'accuracy': 2,
                    'evasion': 1,
                }
            })
        case 'backend':
            return ({
                'CLASS':'backend',
                'MOVES':[ {'name':'Sword Attack', 'label':'pierceRight', 'type':'melee', 'power':Math.round((expValBack*100)/moveAccBack[0]), 'accuracy':moveAccBack[0]},
                          {'name':'Arrow Attack', 'label':'rngAtkRight', 'type':'ranged', 'power':Math.round((expValBack*100)/moveAccBack[1]), 'accuracy':moveAccBack[1]},
                          {'name':'Magic Attack', 'label':'magAtkRight', 'type':'magic', 'power':Math.round((expValBack*100)/moveAccBack[2]), 'accuracy':moveAccBack[2]}],
                'STATS':{
                    'strength': 1,
                    'defense': 2,
                    'accuracy': 1,
                    'evasion': 3,
                }
            })
        case 'fullstack':
            return ({
                'CLASS':'fullstack',
                'MOVES':[ {'name':'Sword Attack', 'label':'bashRight', 'type':'melee', 'power':Math.round((expValFull*100)/moveAccFull[0]), 'accuracy':moveAccFull[0]},
                          {'name':'Arrow Attack', 'label':'rngAtkRight', 'type':'ranged', 'power':Math.round((expValFull*100)/moveAccFull[1]), 'accuracy':moveAccFull[1]},
                          {'name':'Magic Attack', 'label':'magAtkRight', 'type':'magic', 'power':Math.round((expValFull*100)/moveAccFull[2]), 'accuracy':moveAccFull[2]} ],
                'STATS':{
                    'strength': 2,
                    'defense': 2,
                    'accuracy': 2,
                    'evasion': 1,
                }
            })

    }
  }

