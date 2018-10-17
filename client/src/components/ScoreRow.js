import React from 'react'
import {connect} form 'react-redux'
import {} from'semantic-ui-react'
import styles from 'styled-components'

const Pointer = styled(List.Icon) `
  cursor: pointer;
`

class ScoreRow extends React.Component {
  render () {
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
        <Header as="h5" floated="left">{score || 0}</Header>
        </List.Content>
      </List.Item>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreRow)