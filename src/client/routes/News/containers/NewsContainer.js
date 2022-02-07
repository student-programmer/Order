import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Slider from 'react-slick'

import { Button, Card, Grid, Image, List, Placeholder, Tab } from 'semantic-ui-react'
import NewsView from '../components/NewsView'






class NewsContainer extends React.Component {
  constructor (props) {
    super(props)
  }

 
  }

  render () {
    return <NewsView/>
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContainer))
