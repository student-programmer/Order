import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Segment,
  Grid,
  Container,
} from 'semantic-ui-react'

import MainSlider from '../../../blocks/MainSlider'
import OfferList from '../../../blocks/OfferList'
import BrandList from '../../../blocks/BrandList'
import FilterBlock from '../../../blocks/FilterBlock'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()}>
      <title>Savingsdealz</title>
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href={canonical}/>
    </Helmet>
  )
}

export const BundleView = (props) => (
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
    <div id="bundlePage">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column
              width={4}
              mobile={16}
              id="leftSidebar"
            >
              <Segment>
                <div className="header">
                  Find Bundle by your needs
                </div>
                <FilterBlock
                  searchData={{ 'category': 'bundle' }}
                  buttonTitle="Find Bundle for you"
                  actionClickFind={props.actionClickFind}
                />
              </Segment>
              <Segment>
                <BrandList
                  searchData={{ 'category': 'bundle' }}
                  actionCheckedBrands={props.actionCheckedBrands}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column id="contentBlock" width={9} mobile={16}>
              <OfferList
                searchData={props.searchData}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  </div>
)

export default BundleView
