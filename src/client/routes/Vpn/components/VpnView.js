import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Grid,
  Container,
} from 'semantic-ui-react'

import TopBlock from '../../../blocks/TopBlock'
import OfferList from '../../../blocks/OfferList'
import BrandList from '../../../blocks/BrandList'
import MainSlider from '../../../blocks/MainSlider'
import FilterBlock from '../../../blocks/FilterBlock'

import {
  getBestVpnDeals,
  getTopSuggestions
} from '../../../api/offer'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()}>
      <title>The best place to buy VPN with discount</title>
      <meta name="description" content="See the best VPN with discount, based on price and users review"/>
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}

export const VpnView = (props) => (
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
