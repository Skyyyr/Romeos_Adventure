//function to return characters,stats,moves
export function getEnemyData(enemy) {
    switch (enemy) {
        case 'Raphael':
            return ({
                'NAME':'Raphael',
                'MOVES':[{'name':'Raph Attack', 'accuracy':5,'power':5}, {'name':'Raph Kick', 'accuracy':5,'power':5}, {'name':'Raph Punch', 'accuracy':5,'power':5}],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                },
                "SUM":31
            })
        case 'Adam':
            return ({
                'NAME':'Adam',
                'MOVES':[{'name':'Adam Attack', 'accuracy':5,'power':5}, {'name':'Adam Kick', 'accuracy':5,'power':5}, {'name':'Adam Punch', 'accuracy':5,'power':5}],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                },
                "SUM":20
            })
        case 'Zaynab':
            return ({
                'NAME':'Zaynab',
                'MOVES':[{'name':'Zaynab Attack', 'accuracy':5,'power':5}, {'name':'Zaynab Kick', 'accuracy':5,'power':5}, {'name':'Zaynab Punch', 'accuracy':5,'power':5}],
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