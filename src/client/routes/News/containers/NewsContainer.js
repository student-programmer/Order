import React from 'react'


import { Button, Card, Grid, Image, List, Placeholder, Tab } from 'semantic-ui-react'
import NewsView from '../components/NewsView'






class NewsContainer extends React.Component {
  constructor (props) {
    super(props)
  }

 


  render () {
    return <NewsView/>
  }
}

export default NewsContainer
