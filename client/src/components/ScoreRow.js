import React from 'react'
import { connect } from 'react-redux'
import { List, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import {uadateSCores,resetRoll} from '../reduicers/currentgame'
import{
  singles,
  addAllDice,
  staticScore,
} from '../utils/sco?'

const Pointer = style{d(List.Icon)`
  cursor: pointer;
`

class ScoreRow extends React.Component {
  render() {
    const { name, score, currentGame: { roll }} = this.props
    return (
      <List.Item>
        { score === null &&
            <Pointer
              name="check circle outline"
              color="green"
            />
        }
        <List.Content>
          <Header as="h4" floated="left">{score || 0}</Header>
          <Header as="h5" floated="right">{name}</Header>
        </List.Content>
      </List.Item>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreRow)