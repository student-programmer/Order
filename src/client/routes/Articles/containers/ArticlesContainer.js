import React from 'react'


import { Button, Card, Grid, Image, List, Placeholder, Tab } from 'semantic-ui-react'
import ArticlesView from '../components/ArticlesView'






class ArticlesContainer extends React.Component {
  constructor (props) {
    super(props)
  }

 


  render () {
    return <ArticlesView/>
  }
}

export default ArticlesContainer
