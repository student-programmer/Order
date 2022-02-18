import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Container,
  Form,
  Header,
  Segment,
  Breadcrumb,
  Popup,
  Message,
  Grid,
  List
} from 'semantic-ui-react'

const head = (url) => {
  return (
    <Helmet key={Math.random()}>
      <title>VPN Online for U - Find Your VPN Today</title>
      <meta name="robots" content="all"/>
      <meta name="description" content='Savingsdealz looks at various VPN services and gives a detailed overview of the strengths and weaknesses of each'/>
    </Helmet>
  )
}

export const Sitemap = (props) => (
  <div className="SitemapContainer">
    <Container>
    {head(props.url)}
    <Header as="h1" textAlign="center" className="SitemapHeader">Sitemap</Header>
    <List as='ul'>
    <List.Item as='li'><a href='/'>Home</a></List.Item>
    {/* <List.Item as='li'>Vpn</List.Item> */}
    <List.Item as='li'>
    <a href='/vpn'>Vpn</a>
      <List.List as='ul'>
        <List.Item as='li'>
          Offer
        </List.Item>
        <List.Item as='li'>Vendor</List.Item>
      </List.List>
    </List.Item>
    <List.Item as='li'> <a href='/bundle'>Bundle</a></List.Item>
    <List.Item as='li'> <a href='/register'>Register</a></List.Item>
    <List.Item as='li'> <a href='/signin'>Signin</a></List.Item>
    <List.Item as='li'> <a href='/contact-us'>ContactUs</a></List.Item>
    <List.Item as='li'> <a href='/account'>Account</a></List.Item>
    <List.Item as='li'> <a href='/checkout'>Checkout</a></List.Item>
    <List.Item as='li'> <a href='/compare'>Compare</a></List.Item>
    <List.Item as='li'>CompareVendors</List.Item>
    <List.Item as='li'> <a href='/privacy-policy'>PrivacyPolicy</a></List.Item>
    <List.Item as='li'> <a href='/terms-and-conditions-of-use'>Terms And Conditions Of Use</a></List.Item>
    <List.Item as='li'> <a href='/news'>News</a></List.Item>
    <List.Item as='li'> <a href='/articles'>Articles</a></List.Item>
    <List.Item as='li'> <a href='/faq'>Frequently Asked Questions (FAQ)</a></List.Item>
    <List.Item as='li'> <a href='/payment/return'>Page Pay Return</a></List.Item>
    <List.Item as='li'> <a href='/sitemap'>Sitemap</a></List.Item>
  </List>
    </Container>
   
  </div>
)

export default Sitemap
