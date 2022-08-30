export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export function Damage(turn, romeoStats, enemyStats, move){
  let attacker = ''
  let defender = ''
  turn === 'Player One' ? (attacker = romeoStats, defender = enemyStats) : (attacker = enemyStats, defender = romeoStats)
 
  const damage = Math.floor((attacker['strength'] - defender['defense']+move.power)*(Math.random() * (1.05 - .95) + .95))
  const hitProb = (move.accuracy+attacker['accuracy']-defender['evasion'])*(Math.random() * (1.05 - .95) + .95)
  const perc = (Math.random() * (100 - 1) + 1)

  console.log("damage: ", damage)
  console.log("hitprob: ", hitProb)
  console.log("Expected Val", (hitProb/100)*damage)

  if(perc>hitProb)
      return 0

  return damage
}

