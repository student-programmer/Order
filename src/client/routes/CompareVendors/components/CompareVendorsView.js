import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Grid,
  Segment,
  Breadcrumb,
  Container,
  Table,
} from 'semantic-ui-react'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  console.log(canonical)
  return (
    <Helmet key={Math.random()}>
      <title>2022 s vpn Compare tool free and Good</title>
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href={canonical}/>
    </Helmet>
  )
}

export const CompareVendorsView = (props) => (
  <div>
    {head(props.url)}
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
        <Breadcrumb.Section
          link
          as={Link}
          to="/compare"
        >
          Compare
        </Breadcrumb.Section>
        <Breadcrumb.Divider icon="right chevron"/>
        <Breadcrumb.Section active>
          Compare {(props.vendors).join(' with ')}
        </Breadcrumb.Section>
      </Breadcrumb>

      <Grid id="compareVendorBlock">

        <Grid.Row>
          <Grid.Column width={16}>
            <Segment>
              <Table basic="very" textAlign="center">
                <Table.Body>
                  {Object.keys(props.compareInfo).map((key) => (
                    <Table.Row>
                      <Table.Cell width={3} textAlign="left">
                        {props.compareInfo[key]['title']}
                      </Table.Cell>
                      {Object.keys(props.compareInfo[key]['cells']).map((k) => (
                        <Table.Cell width={5}>
                          {props.getTableCell(props.compareInfo[key]['type'], props.compareInfo[key]['cells'][k])}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default CompareVendorsView
