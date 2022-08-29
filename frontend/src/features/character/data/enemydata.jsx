import { STAGES } from "../../../Components/Stages"

//function to return characters,stats,moves
export function getEnemyData(enemy) {
    switch (enemy) {
        case STAGES.indexOf('STAGE_11_BATTLE'):
            return ({
                'NAME':'Raphael',
                'MOVES':[ {'name':'Fork Slash', 'label':'slashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Excuse Me Backhand', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Why Not? Magic Blast', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                }
            })
        case STAGES.indexOf('STAGE_10_BATTLE'):
            return ({
                'NAME':'Zuckerborg',
                'MOVES':[ {'name':'Borg Slash', 'label':'slashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Borg Slap', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Assimilate', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 8, 
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 8,
                }
            })
        case STAGES.indexOf('STAGE_3_BATTLE'):
            return ({
                'NAME':'Adam',
                'MOVES':[ {'name':'Stab of Approval', 'label':'pierceLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Pat on the Back', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Adam-magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                }
            })
        case STAGES.indexOf('STAGE_INTRO_BATTLE'):
            return ({
                'NAME':'BoarMan',
                'MOVES':[ {'name':'Punch', 'label':'pierceLeft', 'type':'melee', 'power':5, 'accuracy':5},
                            {'name':'Boar Bash', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                            {'name':'Molotov', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                }
            })
        case STAGES.indexOf('STAGE_7_BATTLE'):
            return ({
                'NAME':'Zaynab',
                'MOVES':[ {'name':'Caring Slash', 'label':'slashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Friendly Bash', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Mentor Insight', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 5,
                    'defense': 6,
                    'accuracy': 7,
                    'evasion': 7,
                }
            })
        case STAGES.indexOf('STAGE_1_BATTLE'):
            return ({
                'NAME':'Skeleton',
                'MOVES':[ {'name':'Punch', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Bolt', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Bone Magic', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 6,
                    'evasion': 7,
                }
            })
        case STAGES.indexOf('STAGE_6_BATTLE'):
            return ({
                'NAME':'Dragon',
                'MOVES':[ {'name':'Dragon Punch', 'label':'bashLeft', 'type':'melee', 'power':5, 'accuracy':5},
                          {'name':'Wing Attack', 'label':'bashLeft', 'type':'magic', 'power':5, 'accuracy':5},
                          {'name':'Fire Breath', 'label':'magAtkLeft', 'type':'magic', 'power':5, 'accuracy':5} ],
                'STATS':{
                    'strength': 5,
                    'defense': 6,
                    'accuracy': 7,
                    'evasion': 7,

                }
            })
    }
  }