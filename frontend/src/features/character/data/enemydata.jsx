import { STAGES } from "../../../Components/Stages"

//function to return characters,stats,moves
export function getEnemyData(enemy) {
    switch (enemy) {
        case STAGES.indexOf('STAGE_11_BATTLE'):
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
        case STAGES.indexOf('STAGE_1_BATTLE'):
            return ({
                'NAME':'Adam',
                'MOVES':[ {'name':'Adam Jab', 'label':'pierceLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Adam Slap', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Adam Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                },
                "SUM":20
            })
        case STAGES.indexOf('STAGE_INTRO_BATTLE'):
            return ({
                'NAME':'BoarMan',
                'MOVES':[ {'name':'Adam Jab', 'label':'pierceLeft', 'type':'melee', 'power':5, 'accuracy':5},
                            {'name':'Adam Slap', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                            {'name':'Adam Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                },
                "SUM":20
            })
        case STAGES.indexOf('STAGE_3_BATTLE'):
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
        case STAGES.indexOf('STAGE_6_BATTLE'):
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
        case STAGES.indexOf('STAGE_7_BATTLE'):
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