//function to return characters,stats,moves
export function getEnemyData(enemy) {
    switch (enemy) {
        case 5:
            return ({
                'NAME':'Raphael',
                'MOVES':[{'name':'Raph ', 'accuracy':5,'power':5}, {'name':'Raph Kick', 'accuracy':5,'power':5}, {'name':'Raph Punch', 'accuracy':5,'power':5}],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                },
                "SUM":31
            })
        case 0:
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
        case 2:
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
            case 7:
                return ({
                    'NAME':'Enemy',
                    'MOVES':[{'name':'Enemy Attack', 'accuracy':5,'power':5}, {'name':'Enemy Kick', 'accuracy':5,'power':5}, {'name':'Enemy Punch', 'accuracy':5,'power':5}],
                    'STATS':{
                        'strength': 4,
                        'defense': 3,
                        'accuracy': 6,
                        'evasion': 7,
                    },
                    "SUM":20
                })
            case 8:
                return ({
                    'NAME':'Bad Guy',
                    'MOVES':[{'name':'Bad Guy Attack', 'accuracy':5,'power':5}, {'name':'Bad Guy Kick', 'accuracy':5,'power':5}, {'name':'Bad Guy Punch', 'accuracy':5,'power':5}],
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