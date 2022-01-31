import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Grid,
  Container,
  Header
} from 'semantic-ui-react'
import { ProductCollection } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import TopBlock from '../../../blocks/TopBlock'
import OfferList from '../../../blocks/OfferList'
import BrandList from '../../../blocks/BrandList'
import MainSlider from '../../../blocks/MainSlider'
import FilterBlock from '../../../blocks/FilterBlock'
import('schema-dts').ProductCollection

import {
  getBestVpnDeals,
  getTopSuggestions
} from '../../../api_test/offer'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()} script={[
      helmetJsonLdProp<ProductCollection>({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "vpn",
        image: "https://api.savingsdealz.com/images/vpnsecure-logo.png",
        description: "VPNsecure 1 month premium 50% Off",
        brand: {
          "@type": "Brand",
          "name": "VPNSecure.me"
        }
      }),
    ]}>
      
      <title>Choose a VPN service. One-click online security</title>
      <meta property="og:title" content="Choose a VPN service. One-click online security" />
      <meta property="og:url" content="https://savingsdealz.com/vpn" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="description" content="An online VPN service that encrypts internet traffic and hides your physical location and IP address. Improve your privacy and security now"/>
      <meta name="robots" content="all"/>
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}

export const VpnView = (props) => (
  <div>
    <Container>
      <Grid>
      <Grid.Row columns={1} textAlign="center">
              <Grid.Column className="block-title">
              <Header as="h1" textAlign="center">
              The Best VPN Services for 2022
        <Header.Subheader as="h2">
        What is a VPN service?
        </Header.Subheader>
        </Header>
           
              </Grid.Column>
            </Grid.Row>
        {head(props.url)}
        <Grid.Row id="sliderBlock">
          <Grid.Column width={16} verticalAlign="middle">
            <MainSlider/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={4}
            mobile={16}
            id="leftSidebar"
          >
            <div>
              <div className="header">
                Find VPN by your needs
              </div>
              <FilterBlock
                searchData={{ 'category': 'vpn' }}
                buttonTitle="Find VPN for you"
                actionClickFind={props.actionClickFind}
              />
            </div>
            <div>
              <BrandList
                searchData={{ 'category': 'vpn' }}
                actionCheckedBrands={props.actionCheckedBrands}
              />
            </div>
          </Grid.Column>
          <Grid.Column id="contentBlock" width={9} mobile={16}>
            <OfferList
              searchData={props.searchData}
            />
          </Grid.Column>
          <Grid.Column width={3} id="rightSidebar" only="tablet computer">
            <div>
              <div className="header-top">
                <span className="color-red">TOP 5</span> suggestions
              </div>

              <TopBlock
                getData={getTopSuggestions}
              />
            </div>
            <div>
              <div className="header-top color-red">
                BEST VPN DEALS
              </div>
              <TopBlock
                getData={getBestVpnDeals}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default VpnView
