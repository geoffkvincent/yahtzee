export const singles = (value, dice) => {
  return addDice(dice.filter( d => d === value ))
   
}

export const addAllDice = (type, dice) => {
  const totals = []

  switch(type) {
    case 'Three Of A Kind':
    totals = validateThreeOfAKind(dice) ? dice : []
  }
}

export const staticScore = (type, dice) => {
  switch(type) {
    case 'Full HOuse':
    )
  }
}

const addDice = (dice) => {
  return dice.reduce((total, val) => {
    return total + val
  }, 0)
}

const validateFullHouse = (dice) => {

}

const validateLowStraight = (dice) => {

}

const validateHighStraight = (dice) => {

}

const validateYahtzee = (dice) => {

}

const validateThreeOfAKind = (dice) => {

}

const validateFourOfAKind = (dice) => {
  
}

const splitArray = (dice) => {

}

const findSeq = (dice) => {

}