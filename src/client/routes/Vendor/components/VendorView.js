import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Breadcrumb,
  Container,
  Grid,
  Segment,
  Image,
  Accordion,
  Divider,
  Icon,
} from 'semantic-ui-react'

import OfferList from '../../../blocks/OfferList'
import { ProductCollection } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()} script={[
      helmetJsonLdProp<import('schema-dts').ProductCollection>({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "vendor",
        description: "Vendor product",
        brand: {
          "@type": "Brand",
          "name": "Vendor product"
        }
      }),
    ]}>
      <title>Savingsdealz</title>
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href={canonical}/>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "vendor",
          "description": "Vendor product",
          "brand": {
            "@type": "Brand",
            "name": "Vendor product"
          }
        }
    `}</script>
    </Helmet>
  )
}

export const VendorView = (props) => (
  <div>
    {head(props.url)}
    <Container>
      {
        (props.info) && (
          <Breadcrumb id="breadcrumb">
            <Breadcrumb.Section
              link
              as={Link}
              to="/"
            >
              Main
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron"/>
            <Breadcrumb.Section
              link
              as={Link}
              to={props.getCategoryUrl()}
            >
              {props.info['category']}
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron"/>
            <Breadcrumb.Section active>
              {props.info['name']}
            </Breadcrumb.Section>
          </Breadcrumb>
        )
      }

      <Grid id="vendorBlock">

        <Grid.Row stretched>
          <Grid.Column width={16}>
            <Segment>
              <Image
              alt="vendor vpn"
                src={props.info['image']}
              />
              <Accordion>

                {
                  (props.info) && (
                    Object.keys(props.info['descriptions']).map((rowKey) => (
                      <React.Fragment>
                        <Accordion.Title
                          active={props.activeIndex === rowKey}
                          index={rowKey}
                          onClick={props.handleClickAccordion}
                        >
                          {props.info['descriptions'][rowKey]['title']}
                          <Icon name="dropdown" color="red"/>
                          <Divider/>
                        </Accordion.Title>
                        <Accordion.Content active={props.activeIndex === rowKey}>
                          {props.info['descriptions'][rowKey]['text']}
                        </Accordion.Content>
                      </React.Fragment>
                    ))
                  )
                }
              </Accordion>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            {
              (props.info) && (
                <OfferList
                  searchData={{ 'vendor_id': props.info['id'] }}
                />
              )
            }
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
)

export default VendorView
