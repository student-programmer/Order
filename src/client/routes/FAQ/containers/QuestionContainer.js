import React from 'react'


import { Button, Card, Grid, Image, List, Placeholder, Tab } from 'semantic-ui-react'
import QuestionView from '../components/QuestionView'






class QuestionContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <QuestionView/>
  }
}

export default QuestionContainer
