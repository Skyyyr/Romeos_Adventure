import { STAGE_TEST_OUTRO } from "../../../Components/Stages"

//function to return characters,stats,moves
export function getEnemyData(enemy) {
    switch (enemy) {
        case 5:
            return ({
                'NAME':'Raphael',
                'MOVES':[ {'name':'Raph Poke', 'label':'slashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Raph Slap', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Raph Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                },
                "SUM":31
            })
        case STAGE_TEST_OUTRO:
            return ({
                'NAME':'Adam',
                'MOVES':[ {'name':'Adam Jab', 'label':'pierceLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Adam Bolt', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Adam Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
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
                'MOVES':[ {'name':'Zaynab Slash', 'label':'slashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Zaynab Slap', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Zaynab Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 5,
                    'defense': 6,
                    'accuracy': 7,
                    'evasion': 7,
                },
                "SUM":25
            })
        case 6:
            return ({
                'NAME':'EnemyOne',
                'MOVES':[ {'name':'Enemy Punch', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Enemy Bolt', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Enemy Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                },
                "SUM":20
            })
        case 7:
            return ({
                'NAME':'EnemyTwo',
                'MOVES':[ {'name':'Bad Guy Punch', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Bad Guy Bolt', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Bad Guy Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
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