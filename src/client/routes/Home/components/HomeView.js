import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { Helmet } from 'react-helmet'
import {
  Grid,
  Image,
  Button,
  Tab,
  Card,
  Container
} from 'semantic-ui-react'

import MainSlider from '../../../blocks/MainSlider'

const head = (url) => {
  return (
    <Helmet key={Math.random()}>
      <title>The best place to buy VPN coupon with discount</title>
      <meta name="description" content="See the best digital offer, based on price and users review"/>
      <meta name="robots" content="index, follow"/>
      {/*<link rel="canonical" href={canonical} />*/}
    </Helmet>
  )
}

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
      <div className="slider-paging">

      </div>
    )
  },
}

export const HomeView = (props) => (
  <div>
    <Container>
      <Grid>
        {head(props.url)}
        <Grid.Row id="sliderBlock">
          <Grid.Column width={16} verticalAlign="middle">
            <MainSlider/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <div id="homePage">
      <div className="white-block">
        <Container>
          <Grid>
            <Grid.Row columns={1} textAlign="center">
              <Grid.Column className="block-title">
                Why choose us?
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5} textAlign="center" stretched id="chooseUsBlock" centered>
              <Grid.Column mobile={12} computer={3}>
                <div className="item-block">
                  <Image
                    src="/images/home/choose-1.png"
                    centered
                  />
                  <div className="title">
                    Best price you can find
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3}>
                <div className="item-block">
                  <Image
                    src="/images/home/choose-2.png"
                    centered
                  />
                  <div className="title">
                    Buy 4 services pay for 1
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3}>
                <div className="item-block">
                  <Image
                    src="/images/home/choose-3.png"
                    centered
                  />
                  <div className="title">
                    More than 4000 offers
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3}>
                <div className="item-block">
                  <Image
                    src="/images/home/choose-4.png"
                    centered
                  />
                  <div className="title">
                    Accept any payment system
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3}>
                <div className="item-block">
                  <Image
                    src="/images/home/choose-5.png"
                    centered
                  />
                  <div className="title">
                    Don’t need to search all in one place
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <div className="grey-block">
        <Container>
          <Grid>
            <Grid.Row textAlign="center" column={1}>
              <Grid.Column className="block-title">
                Category
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4} textAlign="center" stretched id="categoryBlock" centered>
              {/*                            <Grid.Column>
                                <div>
                                    <Image
                                        src='/images/home/category-1.png'
                                        centered
                                    />
                                    <div className='description'>
                                        <div className='title'>
                                            Hosting
                                        </div>
                                        <Button
                                            primary
                                            content='View more'
                                        />
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <Image
                                        src='/images/home/category-2.png'
                                        centered
                                    />
                                    <div className='description'>
                                        <div className='title'>
                                            Cloud storage
                                        </div>
                                        <Button
                                            primary
                                            content='View more'
                                        />
                                    </div>
                                </div>
                            </Grid.Column>*/}
              <Grid.Column textAlign="center" computer={12} mobile={12}>
                <div>
                  <Image
                    src="/images/home/category-3.png"
                    centered
                  />
                  <div className="description">
                    <div className="title">
                      VPN service
                    </div>
                    <Button
                      as={Link}
                      to="/vpn"
                      primary
                      content="View more"
                    />
                  </div>
                </div>
              </Grid.Column>
              {/*                            <Grid.Column>
                                <div>
                                    <Image
                                        src='/images/home/category-4.png'
                                        centered
                                    />
                                    <div className='description'>
                                        <div className='title'>
                                            Stream service
                                        </div>
                                        <Button
                                            primary
                                            content='View more'
                                        />
                                    </div>
                                </div>
                            </Grid.Column>*/}
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      { /*
            <div className='white-block'>
                <Container>
                    <Grid>
                        <Grid.Row textAlign='center' column={1}>
                            <Grid.Column className='h1'>
                                Bundle
                                <div className='subheader'>
                                    Buy 4 services pay for 1<br />
                                    (Hosting+Cloud service+VPN+Stream service = price for 1 service)
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row stretched id='bundleBlock'>
                            <Grid.Column width={9}>
                                <Image
                                    src='/images/home/bundle-image.png'
                                    centered
                                />
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <div id="bundleDesc">
                                    Bundle name:
                                    <List verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                $19.99
                                            </List.Content>
                                            <Image
                                                src='/images/home/vendor-1.png'
                                            />
                                            <List.Content>
                                                Bluehost
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                $19.99
                                            </List.Content>
                                            <Image
                                                src='/images/home/vendor-2.png'
                                            />
                                            <List.Content>
                                                Google cloud
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                $19.99
                                            </List.Content>
                                            <Image
                                                src='/images/home/vendor-3.png'
                                            />
                                            <List.Content>
                                                Nord VPN
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                $19.99
                                            </List.Content>
                                            <Image
                                                src='/images/home/vendor-4.png'
                                            />
                                            <List.Content>
                                                Vimeo
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                Total: <span className='old-price'>$79.96</span>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                    <div className='btn-block'>
                                        <div>
                                            Our price: <br />
                                            $19.99
                                        </div>
                                        <div className='float-right'>
                                            <Button
                                                primary
                                                content='Buy bundle'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            */}

      <div className="grey-block">
        <Container>
          <Grid id="recommendationBlock">
            <Grid.Row textAlign="center">
              <Grid.Column className="block-title">
                Recommendations
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Tab menu={{ secondary: true }} panes={props.getRecomedationPanes()}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <div className="white-block" id="buyWithDiscountBlock">
        <Image
          src="/images/home/stop-paying-image.png"
        />
        <div className="button">
          <Button
            as={Link}
            to="/vpn"
            primary
            content="Buy with discount"
          />
        </div>
      </div>
      <div className="grey-block">
        <Container>
          <Grid id="feedbackBlock">
            <Grid.Row textAlign="center" column={1}>
              <Grid.Column className="block-ttile">
                Feedback
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Slider {...settings}>
                  <Card style={{ width: 354 }}>
                    <Card.Header>
                      <Image
                        className="image"
                        src="/images/home/feedback-1.png"
                      />
                      <div className="name-block">
                        <Image
                          className="mark"
                          src="/images/home/c.png"
                        />
                        <div className="name">
                          Connie <br/>Lane
                        </div>
                      </div>
                      <span className="date">
                                                February 4, 2020
                                            </span>
                    </Card.Header>
                    <Card.Content>
                      It is realy amazing!<br/>
                      I bought 1 year premium VpnSecure account and save 70%!<br/>
                      Thanks you guys, you are awesome!
                    </Card.Content>
                  </Card>
                  <Card style={{ width: 354 }}>
                    <Card.Header>
                      <Image
                        className="image"
                        src="/images/home/feedback-2.png"
                      />
                      <div className="name-block">
                        <Image
                          className="mark"
                          src="/images/home/c.png"
                        />
                        <div className="name">
                          Francisco <br/>Watson
                        </div>
                      </div>

                      <span className="date">
                                                April 7, 2020
                                            </span>
                    </Card.Header>
                    <Card.Content>
                      Bundles are great!<br/>
                      I bought 4in1 and got - VPN, Cloud storage, IpTV and stream subscriptions for 1 month with awesome
                      price!<br/>
                      I got 80% off! You are right, dont pay full price use your brain!
                    </Card.Content>
                  </Card>
                  <Card style={{ width: 354 }}>
                    <Card.Header>
                      <Image
                        className="image"
                        src="/images/home/feedback-3.png"
                      />
                      <div className="name-block">
                        <Image
                          className="mark"
                          src="/images/home/c.png"
                        />
                        <div className="name">
                          Devon <br/>Hawkins
                        </div>
                      </div>

                      <span className="date">
                                                May 11, 2020
                                            </span>
                    </Card.Header>
                    <Card.Content>
                      Hosting, VPN, Antivirus and cloud storage with huge discount!
                    </Card.Content>
                  </Card>
                </Slider>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
  </div>
)

export default HomeView
