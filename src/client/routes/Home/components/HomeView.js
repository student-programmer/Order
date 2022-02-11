import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions';
import useMediaQuery from 'react-use-media-query-hook';
import {
  Grid,
  Image,
  Button,
  Tab,
  Card,
  Container, 
  Header,
  GridColumn
} from 'semantic-ui-react'
import MainSlider from '../../../blocks/MainSlider'
// import('schema-dts').Organization
import { Organization } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";


const head = (url) => {
  return (
    // <Helmet key={Math.random()} script={[
    //   helmetJsonLdProp<Organization>({
       
    //   }),
    // ]}>
    <Helmet key={Math.random()}>
        {/* <Title>The best place to buy VPN coupon with discount</Title> */}
      <title>The best place to buy VPN coupon with discount</title>
      <meta property="og:title" content="The best place to buy VPN coupon with discount" />
      <meta property="og:url" content="https://savingsdealz.com/" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="description" content="Every VPN is tested so you don't have to. Rigorous testing has been done to find the best VPN for you"/>
      <meta name="robots" content="index, follow"/>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "savingsdealz",
          url: "https://savingsdealz.com/",
        }
    `}</script>
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



export const HomeView = (props) => {
  const { width } = useWindowDimensions();
  return( 

  <div>
 {head(props.url, props.title)}
    <div id="homePage">
        <div className="grey-block">
        <Container >
          <Grid textAlign='center' id="recommendationBlock">
            <Grid.Row textAlign="center">
              <Grid.Column className="block-title-rates">
              Popular VPN rates
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columnst={1}>
              <Grid.Column> 
                {/* <Tab panes={props.getRecomedationPanes()}/> */}
          
              {(width >= 992) ? <Tab menu={{ secondary: true }} panes={props.getRecomedationPanes()}/> : <Tab menu={{ secondary: true }} panes={props.getTwoRecomedationPanes()}/>}
          
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </div>
      <div className="white-block">
      <Container> 
      <Grid>
           <Grid.Row textAlign="center" id="sliderBlock">
          <Grid.Column width={16} verticalAlign="middle">
            <MainSlider/>
          </Grid.Column> 
      </Grid.Row>
    </Grid>
    </Container>
        <Container>
        
          <Grid>
            <Grid.Row columns={1} textAlign="center">
              <Grid.Column className="block-title choose">
                Why choose us?
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5} textAlign="center" stretched id="chooseUsBlock" centered>
              <Grid.Column mobile={12} computer={3} textAlign="center" className="cardCentered">
                <div className="first-item-block">
                  <Image
                  alt="price tag"
                    src="/images/home/choose-1.png"
                    centered
                  />
                  <div className="title">
                    Best price you can find
                  </div>
                  <Button
                      className="first-card-button"
                      as={Link}
                      primary
                      content="Learn more >"
                    />
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3} textAlign="center" className="cardCentered">
                <div className="item-block">
                  <Image
                    alt="piggy bank"
                    src="/images/home/choose-2.png"
                    centered
                  />
                  <div className="title">
                    Buy 4 services pay for 1
                  </div>
                  {/* <p className="card-text">Learn more ></p> */}
                  <Button
                      className="card-button"
                      as={Link}
                      primary
                      content="Learn more >"
                    />
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3} textAlign="center" className="cardCentered">
                <div className="item-block">
                  <Image
                    alt="percentages"
                    src="/images/home/choose-3.png"
                    centered
                  />
                  <div className="title">
                    More than 4000 offers
                  </div>
                  <Button
                      className="card-button"
                      as={Link}
                      primary
                      content="Learn more >"
                    />
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3} textAlign="center" className="cardCentered">
                <div className="item-block">
                  <Image
                    alt="bank card"
                    src="/images/home/choose-4.png"
                    centered
                  />
                  <div className="title">
                    Accept any payment system
                  </div>
                  <Button
                      className="card-button"
                      as={Link}
                      primary
                      content="Learn more >"
                    />
                </div>
              </Grid.Column>
              <Grid.Column mobile={12} computer={3} textAlign="center" className="cardCentered">
                <div className="item-block">
                  <Image
                    alt="magnifier"
                    src="/images/home/choose-5.png"
                    centered
                  />
                  <div className="title">
                    Don’t need to search all in one place
                  </div>
                  <Button
                      className="card-button"
                      as={Link}
                      primary
                      content="Learn more >"
                    />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <div className="grey-block">
        <Container>
          <Grid>
            <Grid.Row  column={1}>
              <Grid.Column className="block-title category" textAlign="center" >
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
                  alt="vpn security"
                    src="/images/home/category-3.png"
                    centered
                  />
                  <div className="description">
                    <div className="title">
                      VPN service
                    </div>
                    <Button
                      className="view"
                      as={Link}
                      to="/vpn"
                      primary
                      content="View more"
                    />
                    <div className="description-vpn">To view the entire range of VPN products, click on the link at the top. There you will get all the information you are interested in.</div>
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

      {/* <div className="grey-block">
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
      </div> */}
      <div className="white-block" id="buyWithDiscountBlock">
        <Image
        alt="economy"
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
          <Grid id="feedbackBlock" textAlign="center">
            <Grid.Row textAlign="center" column={1}  divided >
              <Grid.Column  textAlign="center" className="block-ttile">
                Feedback
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} textAlign="center" centered>
            {/* <Grid.Column>  */}
                {/* <Slider {...settings}> */}
                <Grid.Column computer={5}  mobile={16}> 
                  <Card style={{ width: 354 }} className="feedbackCard">
                    <Card.Header>
                      <Image
                      alt="feedback"
                        className="image"
                        src="/images/home/feedback-1.png"
                      />
                      <div className="name-block">
                        <Image
                        alt="quotation marks"
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
                  </Grid.Column>
                  <Grid.Column computer={1}></Grid.Column>
                  <Grid.Column  computer={5}  mobile={16} >
                  <Card style={{ width: 354 }}>
                    <Card.Header>
                      <Image
                      alt="feedback"
                        className="image"
                        src="/images/home/feedback-2.png"
                      />
                      <div className="name-block">
                        <Image
                          alt="quotation marks"
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
                  </Grid.Column>
                  <Grid.Column computer={1}></Grid.Column>
                  <Grid.Column   computer={4} mobile={16} >
                  <Card style={{ width: 354 }} className="feedbakCard">
                    <Card.Header>
                      <Image
                      alt="feedback"
                        className="image"
                        src="/images/home/feedback-3.png"
                      />
                      <div className="name-block">
                        <Image
                        alt="quotation marks"
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
                  </Grid.Column>
                {/* </Slider> */}
              {/* </Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
    <Grid>
      <Grid.Row columns={1}>
              <Grid.Column className="block-title">
              <Header as="h1" textAlign="center">
              The Best VPNs to Protect Yourself Online
        </Header>
        <p  className="pText" textAlign="center">
        Every VPN is tested so you don't have to. Rigorous testing has been done to find the best VPN for you.
        </p>
        <Header as="h2" textAlign="center">
        Safe and confidential Internet access
        </Header>
        <div><p>What are VPNs and what are they for?<br/>
           VPN (Virtual Private Network) is a technology that allows you to run a virtual cable through the Internet to your remote network (server). Today World Wide Web became a very insecure place. Everyone needs protection, and much more people are ready to sacrifice rate for security, we provide a better solution, no sacrifices, we provide the best VPN service, fastest, and safest.</p>
           <Header as="h2" textAlign="center">
           What is a VPN?
        </Header>
         <p> The general hallmarks of outstanding VPN’s choice are connection rate and data encryption quality. You have been looking the prime VPN for a long time, or, happy accident led you here, be sure, you are at the right place, the best VPN for gaming, mining & crypto-trading from every part of the world. A good VPN is fast and secure... what is the superior VPN? Fastest VPN that provides such rate and level of security that you just don't notice it. Confidence and full situation control, that's what perfect VPN is.<br/>
          VPN works on «above» the Internet. This means, you can connect to it from anywhere. The principle of VPN is to create a secure connection over the network. The connection encrypts and protects the data being sent.<br/>
          Best VPN with the highest speed, sounds amazing, but, how much does it cost? Our prices will pleasantly surprise you, as they surprise and please, thousands of our customers. The first-rate VPN for any purpose. Choose what you want and enjoy speed and security always and everywhere.</p><br/>
            </div>
              </Grid.Column>

           </Grid.Row>
        
         {/* <Grid.Row id="sliderBlock">
          <Grid.Column width={16} verticalAlign="middle">
            <MainSlider/>
          </Grid.Column> 
        </Grid.Row>*/}
      </Grid>
    </Container>
      </div>
    </div>
  </div>
)}
// export default props => renderToString(<HomeView title="The best place to buy VPN coupon with discount" />)
export default HomeView
