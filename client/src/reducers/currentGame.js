import { bindActionCreators } from "redux";

const ROLL_DICE = 'ROLL_DICE'
const TOGGLE_KEPT = 'TOGGLE_KEPT'

export const rollDice = () => {

}

export const toggleKept = (i) => {

}

export default (
  state = {
    roll: 0,
    dice: [...new Array(5)],
    keep: [],
  },
  action
) => {
  switch(action.type) {
    case ROLL_DICE:
      return {
        ...state,
        dice: action.dice,
        roll: state.roll + 1
      }
    case TOGGLE_KEPT:
      return {
        ...state,
        keep: action.keep,
      }
    default: 
      return state 
  }
}