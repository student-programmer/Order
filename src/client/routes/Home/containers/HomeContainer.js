import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Slider from 'react-slick'

import { Button, Card, Grid, Image, List, Placeholder, Tab } from 'semantic-ui-react'

import HomeView from '../components/HomeView'

import { getRecomendationOffers } from '../../../api/offer'

import { fetchCartOffers } from '../../../actions/getCartOffers'

const mapDispatchToProps = {
  fetchCartOffers
}

const mapStateToProps = (store) => ({
  getCartOffers  : store.getCartOffers
})

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  customPaging: function (i) {
    return (
      <div className='slider-paging' />
    )
  },
}

class HomeContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading : 0,
      offers  : {}
    }
  }

  getRecomendationOffers = (category) => {
    let {
            offers
        } = this.state

    if (offers.hasOwnProperty(category)) {
      return offers[category]
    }

    let data = {
      category  : category,
    }

    let result = getRecomendationOffers(data)

    result.then(
            result => {
              let {
                    status,
                    rows,
                } = result
              if (status) {
                offers[category] = rows

                this.setState({
                  loading : 0,
                  offers
                })
              }
            },
            error => {
              alert('Rejected: ' + error) // error - аргумент reject
            }
        )

    return false
  }

  displayOffer = (offer) => {
    let {
            id,
            image,
            name,
            descriptions,
            price,
            url
        } = offer
    return (
      <Card key={'of-' + id} style={{ width: 230 }}>
        <Card.Header>
          <Image
          alt="offer"
            src={image}
                    />
        </Card.Header>
        <Card.Content>
          <div className='title-wide'>
            { name }
          </div>
          { (descriptions) && (
            <List>
              {Object.keys(descriptions).map((rowKey) => (
                <List.Item key={'ld-' + id + '-r-' + rowKey}>
                  <List.Icon name='check' />
                  <List.Content>
                    { descriptions[rowKey] }
                  </List.Content>
                </List.Item>
                            ))}
            </List>
                    )}
        </Card.Content>
        <Card.Content extra>
          <Grid verticalAlign='middle'>
            <Grid.Column width={6}>
              <div className='price'>
                ${ price }
              </div>
            </Grid.Column>
            <Grid.Column width={10} textAlign='right'>
              <Button
                as={Link}
                to={url}
                primary
                content='Buy now'
                            />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }

  getRecommendationPanes = () => {
    let vpnOffers = this.getRecomendationOffers('vpn')

    const loaderItems = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ]

    return [
      {
        menuItem: 'VPN service',
        render: () => (
          <Tab.Pane attached={false} key='vpn-tab'>
            <Slider {...settings}>
              {
                vpnOffers ? (

                  Object.keys(vpnOffers).map((rowKey) => this.displayOffer(vpnOffers[rowKey]))

                ) : (
                  Object.keys(loaderItems).map((k) => (
                    <Placeholder style={{ width: 230 }} key={'pl-' + k}>
                      <Placeholder.Image/>
                      <Placeholder.Header>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                        <Placeholder.Line length='full'/>
                      </Placeholder.Header>
                    </Placeholder>
                  ))
                )
              }
            </Slider>
          </Tab.Pane>
        ),
      },
    ]
  }

  render () {
    return <HomeView
      {...this.state}

      getRecomedationPanes={this.getRecommendationPanes}
                />
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))
