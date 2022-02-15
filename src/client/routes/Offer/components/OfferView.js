import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Container,
  Breadcrumb,
  Grid,
  Item,
  Input,
  Button,
  Segment,
  Icon
} from 'semantic-ui-react'

import TopBlock from '../../../blocks/TopBlock'
import TopBlockHorizontal from '../../../blocks/TopBlockHorizontal'

import {
  getBestVpnDeals
} from '../../../api_test/offer'
import('schema-dts').ProductCollection
import { ProductCollection } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";

const head = (url, info) => {
  const pageUrl = (typeof url !== 'undefined') ? url : ''
  let canonical = 'https://savingsdealz.com' + pageUrl
  // const [description, setDescription] = useState('')
  // const [title, setTitle] = useState('')
  // let urls = ["offer-vpnsecure-1-month-premium-vpn-1", '/offer-vpnsecure-6-month-premium-vpn-2' ]
  // let result = urls.some((element) => {
  //   if(element == pageUrl){
  //     setDescription("yes")
  //   }else{
  //     setDescription("false")
  //   }
  // })
  // console.log(description)
//   for(let i = 0; i < 10; i++){ 
//      if(pageUrl === "\/offer-vpnsecure-1-month-premium-vpn-1"){
//     setDescription("Protect your data and privacy, browse the web anonymously. Fast and secure access to websites, applications and services. Get it for FREE")
//     setTitle("Protect your data and privacy, browse the web anonymously. Fast and secure access to websites, applications and services. Get it for FREE")
//   } else if(pageUrl === "\/offer-vpnsecure-6-month-premium-vpn-2 "){
//     setDescription("VPN or virtual private network is an easy way to improve your online privacy. We've looked at a lot of them, and these are the best VPNs we've tested. ")
//     setTitle("VPN or virtual private network is an easy way to improve your online privacy. We've looked at a lot of them, and these are the best VPNs we've tested. ")
//   }
// }
// console.log(description)

  return (
    <Helmet key={Math.random()}>
      <title></title>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name":"vpn",
          "image": "",
          "description": 'All vpn on your choice',
          "brand": {
            "@type": "Brand",
            "name": "vpn"
          }
        }
    `}</script>
      <meta name="robots" content="index, follow"/>
      <meta name="description" content="offer"/> 
      <link rel="canonical" href={canonical}/>
    </Helmet>
  )

}

export const OfferView = (props) => (
      
  <div>
    {head(props.url, props.info)}
    <Container>
      <Breadcrumb id="breadcrumb">
        <Breadcrumb.Section
          link
          as={Link}
          to="/"
        >
          Main
        </Breadcrumb.Section>
        <Breadcrumb.Divider icon="right chevron"/>
        <Breadcrumb.Section active>
          Offer
        </Breadcrumb.Section>
      </Breadcrumb>

      <Grid id="offerBlock">

        <Grid.Row stretched>
          <Grid.Column width={11}>
            <Segment className="info-block">
              <Item.Group>
                <Item>
                  {
                    (props.info['ribbon']) && (
                      <div className="ribbon">{props.info['ribbon']}</div>
                    )
                  }
                  <Item.Image
                  alt="logo"
                    size="tiny"
                    className="logo"
                    verticalAlign="middle"
                    src={props.info['image']}
                  />
                  <Item.Content>
                    <Item.Header className="title">{props.info['title']}</Item.Header>
                    <Item.Meta>{props.info['subtitle']}</Item.Meta>
                    <Item.Description>
                      <div className="price-block">
                        {
                          (props.info['price']) &&
                          (
                            <span className="price">
                                                            ${props.info['price']}
                                                        </span>
                          )
                        }
                        {
                          (props.info['old_price']) &&
                          (
                            <span className="old-price">
                                                            ${props.info['old_price']}
                                                        </span>
                          )
                        }
                      </div>
                    </Item.Description>
                    <Item.Extra>
                      <Input
                        className="quantity"
                        type="number"
                        name={props.info['id']}
                        onChange={props.handleInputChangeQuantity}
                        value={props.offer['quantity']}
                        min={1}
                      />
                      <Button
                        primary
                        content="Add to cart"
                        onClick={props.handleClicAddToCart}
                      />
                    </Item.Extra>
                    {(props.info['user_used']) && (
                      <Item.Description>
                        {props.info['user_used']} users used this coupon
                      </Item.Description>
                    )}
                  </Item.Content>
                </Item>
              </Item.Group>
              <p>
                <span className="category">Category: </span> <span
                className="category-value">{props.info['category']}</span>
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <div className="header-top color-red">
                BEST VPN DEALS
              </div>
              <TopBlock
                getData={getBestVpnDeals}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment className="info-block">
              <div className="header-top color-red">
                People who viewed this item also viewed
              </div>
              <TopBlockHorizontal
                getData={getBestVpnDeals}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default OfferView
