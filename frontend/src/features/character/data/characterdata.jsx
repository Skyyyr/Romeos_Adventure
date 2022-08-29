//function to return characters,stats,moves
export function getCharacterData(character) {
    switch (character) {
        case 'frontend':
            return ({
                'CLASS':'frontend',
                'MOVES':[ {'name':'Sword Attack', 'label':'slashRight', 'type':'melee', 'power':4, 'accuracy':5},
                          {'name':'Arrow Attack', 'label':'rngAtkRight', 'type':'ranged', 'power':5, 'accuracy':5},
                          {'name':'Magic Attack', 'label':'magAtkRight', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                }
            })
        case 'backend':
            return ({
                'CLASS':'backend',
                'MOVES':[ {'name':'Sword Attack', 'label':'pierceRight', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Arrow Attack', 'label':'rngAtkRight', 'type':'ranged', 'power':5, 'accuracy':5},
                          {'name':'Magic Attack', 'label':'magAtkRight', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                }
            })
        case 'fullstack':
            return ({
                'CLASS':'fullstack',
                'MOVES':[ {'name':'Sword Attack', 'label':'bashRight', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Arrow Attack', 'label':'rngAtkRight', 'type':'ranged', 'power':5, 'accuracy':5},
                          {'name':'Magic Attack', 'label':'magAtkRight', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 5,
                    'defense': 6,
                    'accuracy': 7,
                    'evasion': 7,
                }
            })

    }
  }

