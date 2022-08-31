import { STAGES } from "../../../Components/Stages"

//function to return characters,stats,moves
export function getEnemyData(enemy) {
    const moveAccRaph = [90,83,68]
    const expValRaph = 30
    const moveAccZuck = [91,77,71]
    const expValZuck = 30
    const moveAccAdam = [89,81,72]
    const expValAdam = 30
    const moveAccZaynab = [92,82,70]
    const expValZaynab = 30
    const moveAccSkel = [88,78,69]
    const expValSkel = 30
    const moveAccBoar = [93,79,67]
    const expValBoar = 30
    const moveAccDrag = [87,80,73]
    const expValDrag = 30
    switch (enemy) {
        case STAGES.indexOf('STAGE_11_BATTLE'):
            return ({
                'NAME':'Raphael',
                'MOVES':[ {'name':'Fork Slash', 'label':'slashLeft', 'type':'melee', 'power':Math.round((expValRaph*100)/moveAccRaph[0]), 'accuracy':moveAccRaph[0]},
                          {'name':'Excuse Me Backhand', 'label':'bashLeft', 'type':'melee', 'power':Math.round((expValRaph*100)/moveAccRaph[1]), 'accuracy':moveAccRaph[1]},
                          {'name':'Why Not? Magic Blast', 'label':'magAtkLeft', 'type':'magic', 'power':Math.round((expValRaph*100)/moveAccRaph[2]), 'accuracy':moveAccRaph[2]} ],
                'STATS':{
                    //user sum max is 43
                    'strength': 13, 
                    'defense': 13,
                    'accuracy': 13,
                    'evasion': 13,
                },
                'BACKGROUND':'castle_3'
            })
        case STAGES.indexOf('STAGE_10_BATTLE'):
            return ({
                'NAME':'Zuckerborg',
                'MOVES':[ {'name':'Borg Slash', 'label':'slashLeft', 'type':'melee', 'power':Math.round((expValZuck*100)/moveAccZuck[0]), 'accuracy':moveAccZuck[0]},
                          {'name':'Borg Slap', 'label':'bashLeft', 'type':'melee', 'power':Math.round((expValZuck*100)/moveAccZuck[1]), 'accuracy':moveAccZuck[1]},
                          {'name':'Assimilate', 'label':'magAtkLeft', 'type':'magic', 'power':Math.round((expValZuck*100)/moveAccZuck[2]), 'accuracy':moveAccZuck[2]} ],
                'STATS':{
                    //user sum max is 40
                    'strength': 10, 
                    'defense': 10,
                    'accuracy': 10,
                    'evasion': 11,
                },
                'BACKGROUND':'castle_2'
            })
        case STAGES.indexOf('STAGE_3_BATTLE'):
            return ({
                'NAME':'Adam',
                'MOVES':[ {'name':'Stab of Approval', 'label':'pierceLeft', 'type':'melee', 'power':Math.round((expValAdam*100)/moveAccAdam[0]), 'accuracy':moveAccAdam[0]},
                          {'name':'Pat on the Back', 'label':'bashLeft', 'type':'magic', 'power':Math.round((expValAdam*100)/moveAccAdam[1]), 'accuracy':moveAccAdam[1]},
                          {'name':'Adam-magic', 'label':'magAtkLeft', 'type':'magic', 'power':Math.round((expValAdam*100)/moveAccAdam[2]), 'accuracy':moveAccAdam[2]} ],
                'STATS':{
                    //user sum max is 19
                    'strength': 5,
                    'defense': 5,
                    'accuracy': 5,
                    'evasion': 6,
                },
                'BACKGROUND': 'cave_1'
            })
        case STAGES.indexOf('STAGE_INTRO_BATTLE'):
            return ({
                'NAME':'BoarMan',
                'MOVES':[ {'name':'Punch', 'label':'pierceLeft', 'type':'melee', 'power':Math.round((expValBoar*100)/moveAccBoar[0]), 'accuracy':moveAccBoar[0]},
                            {'name':'Boar Bash', 'label':'bashLeft', 'type':'magic', 'power':Math.round((expValBoar*100)/moveAccBoar[1]), 'accuracy':moveAccBoar[1]},
                            {'name':'Molotov', 'label':'magAtkLeft', 'type':'magic', 'power':Math.round((expValBoar*100)/moveAccBoar[2]), 'accuracy':moveAccBoar[2]} ],
                'STATS':{
                    //user sum max is 10
                    'strength': 4,
                    'defense': 3,
                    'accuracy': 3,
                    'evasion': 2,
                },
                'BACKGROUND':'elven_4'
            })
        case STAGES.indexOf('STAGE_7_BATTLE'):
            return ({
                'NAME':'Zaynab',
                'MOVES':[ {'name':'Caring Slash', 'label':'slashLeft', 'type':'melee', 'power':Math.round((expValZaynab*100)/moveAccZaynab[0]), 'accuracy':moveAccZaynab[0]},
                          {'name':'Friendly Bash', 'label':'bashLeft', 'type':'melee', 'power':Math.round((expValZaynab*100)/moveAccZaynab[1]), 'accuracy':moveAccZaynab[1]},
                          {'name':'Mentor Insight', 'label':'magAtkLeft', 'type':'magic', 'power':Math.round((expValZaynab*100)/moveAccZaynab[2]), 'accuracy':moveAccZaynab[2]} ],
                'STATS':{
                    //user sum max is 31
                    'strength': 8,
                    'defense': 9,
                    'accuracy': 8,
                    'evasion': 8,
                },
                'BACKGROUND':'arena_1'
            })
        case STAGES.indexOf('STAGE_1_BATTLE'):
            return ({
                'NAME':'Skeleton',
                'MOVES':[ {'name':'Punch', 'label':'bashLeft', 'type':'melee', 'power':Math.round((expValSkel*100)/moveAccSkel[0]), 'accuracy':moveAccSkel[0]},
                          {'name':'Bolt', 'label':'bashLeft', 'type':'magic', 'power':Math.round((expValSkel*100)/moveAccSkel[1]), 'accuracy':moveAccSkel[1]},
                          {'name':'Bone Magic', 'label':'magAtkLeft', 'type':'magic', 'power':Math.round((expValSkel*100)/moveAccSkel[2]), 'accuracy':moveAccSkel[2]} ],
                'STATS':{
                    //user sum max is 13
                    'strength': 3,
                    'defense': 4,
                    'accuracy': 4,
                    'evasion': 4,
                },
                'BACKGROUND':'arena_4',
            })
        case STAGES.indexOf('STAGE_6_BATTLE'):
            return ({
                'NAME':'Dragon',
                'MOVES':[ {'name':'Dragon Punch', 'label':'bashLeft', 'type':'melee', 'power':(expValDrag*100)/moveAccDrag[0], 'accuracy':moveAccDrag[0]},
                          {'name':'Wing Attack', 'label':'bashLeft', 'type':'magic', 'power':(expValDrag*100)/moveAccDrag[1], 'accuracy':moveAccDrag[1]},
                          {'name':'Fire Breath', 'label':'magAtkLeft', 'type':'magic', 'power':(expValDrag*100)/moveAccDrag[2], 'accuracy':moveAccDrag[2]} ],
                'STATS':{
                    //user sum max is 26
                    'strength': 8,
                    'defense': 7,
                    'accuracy': 8,
                    'evasion': 7,
                },
                'BACKGROUND':'cave_4'
            })
    }
  }