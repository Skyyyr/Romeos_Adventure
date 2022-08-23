export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export function Damage(turn, romeoStats, enemyStats, move){
  let attacker = ''
  let defender = ''
  let damage = 0
  turn === 'Player One' ? (attacker = romeoStats, defender = enemyStats) : (attacker = enemyStats, defender = romeoStats)
 
  damage = ((attacker['strength']/defender['defense'])*move.power*(Math.random() * (1.10 - .90) + .90)).toFixed(2)
  

  const hitProb = (5*move['accuracy']+45+((attacker['accuracy']-defender['evasion'])/2))*(Math.random() * (1.10 - .90) + .90)
  const perc = (Math.random() * (100 - 1) + 1)
  if(perc>hitProb)
      return 0

  return damage*6

}

