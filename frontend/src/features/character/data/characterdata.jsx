//function to return characters,stats,moves
export function getCharacterData(character) {
    switch (character) {
        case 'frontend':
            return ({
                'CLASS':'frontend',
                'MOVES':[{'name':'React', 'accuracy':5,'power':5}, {'name':'HTML', 'accuracy':5,'power':5}, {'name':'CSS', 'accuracy':5,'power':5}],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                },
                "SUM":31
            })
        case 'backend':
            return ({
                'CLASS':'backend',
                'MOVES':[{'name':'Django', 'accuracy':5,'power':5}, {'name':'Python', 'accuracy':5,'power':5}, {'name':'Postgres', 'accuracy':5,'power':5}],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                },
                "SUM":20
            })
        case 'fullstack':
            return ({
                'CLASS':'fullstack',
                'MOVES':[{'name':'React', 'accuracy':5,'power':5}, {'name':'Django', 'accuracy':5,'power':5}, {'name':'Postgres', 'accuracy':5,'power':5}],
                'STATS':{
                    'strength': 5,
                    'defense': 6,
                    'accuracy': 7,
                    'evasion': 7,

                },
                "SUM":25
            })

    }
  }

