import React from 'react'
import Page404View from '../components/Page404View'

class Page404Container extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <
      Page404View
      {...this.state}
      url={this.props.match.url}
      />
  }
}

export default Page404Container
