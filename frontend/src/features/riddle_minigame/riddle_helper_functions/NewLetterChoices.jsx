import ShuffleArray from './ShuffleArray'

export default function NewLetterChoices(answer) {
  let list = answer.split('')
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  while (list.length < 14) {
    list.push(alphabet.charAt(Math.floor(Math.random()*alphabet.length)))
  }
  const listWithLetterIDs = list.map((letter, index) => {
    return [index.toString(), letter]
  })
  const newList = ShuffleArray(listWithLetterIDs)
  return newList
}