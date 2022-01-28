import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Grid,
  Segment,
  Breadcrumb,
  Header,
  Form,
  Container,
  Placeholder,
  Divider,
  Table,
  Image,
  Checkbox,
  Button
} from 'semantic-ui-react'

const loaderItems = [
  1, 2, 3, 4, 5
]

const head = (url) => {
  return (
    <Helmet key={Math.random()}>
      <title>2022’s VPN Compare Tool – Free and Good</title>
      <meta name="description" content="Compare the best VPNs and find yours now. VPN experts compare and rate the best VPNs on the market in 2022. "/>
      <meta name="robots" content="all"/>
    </Helmet>
  )
}

export const CompareView = (props) => (
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
        <Breadcrumb.Section active>
          Compare
        </Breadcrumb.Section>
      </Breadcrumb>

      <Grid>
      {/* <Grid.Row columns={1} textAlign="center">
              <Grid.Column className="block-title">
              <h1>VPN providers comparison</h1>
              </Grid.Column>
            </Grid.Row> */}
        <Grid.Row stretched id="compareBlock">
          <Grid.Column width={16}>
            <Segment>
              <Header
                as="h1"
                textAlign="center"
              >
                VPN providers comparison
                <Header.Subheader>
                  Side - by - side comparison of features? prices and review. Select up to 3 VPNs
                </Header.Subheader>
              </Header>
              <Form>
                <Form.Group widths="equal">
                  <Form.Dropdown
                    placeholder="Select vendor"
                    clearable
                    fluid
                    search
                    selection
                    name="vendor1"
                    value={props.compareVendors['vendor1']}
                    options={props.getVendorsListOptions()}
                    loading={!props.vendorsList}
                    onChange={props.handleInputChangeVendors}
                  />
                  <label className="vs-divided">VS</label>
                  <Form.Dropdown
                    placeholder="Select vendor"
                    clearable
                    fluid
                    search
                    selection
                    name="vendor2"
                    value={props.compareVendors['vendor2']}
                    options={props.getVendorsListOptions()}
                    loading={!props.vendorsList}
                    onChange={props.handleInputChangeVendors}
                  />
                  <label className="vs-divided">VS</label>
                  <Form.Dropdown
                    placeholder="Select vendor"
                    clearable
                    fluid
                    search
                    selection
                    name="vendor3"
                    value={props.compareVendors['vendor3']}
                    options={props.getVendorsListOptions()}
                    loading={!props.vendorsList}
                    onChange={props.handleInputChangeVendors}
                  />
                </Form.Group>
                <Button
                  as={Link}
                  to={props.getCompareUrl()}
                  disabled={props.checkCompareVendorButtonDisabled()}
                  primary
                  className="compare-button"
                >
                  Compare
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment>
              <Grid columns={1}>
                <Grid.Column textAlign="left">
                  <Form>
                    <Form.Group widths="equal">
                      {
                        (props.filter) ? (
                          Object.keys(props.filter).map((key) => (
                            <Form.Field fluid>
                              <label className="subheader">{props.filter[key]['title']}</label>
                              {props.getInput(key, props.filter[key])}
                            </Form.Field>
                          ))
                        ) : (
                          <React.Fragment>
                            <Form.Field fluid>
                              <Placeholder fluid>
                                <Placeholder.Line length="short"/>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Form.Field>
                            <Form.Field fluid>
                              <Placeholder fluid>
                                <Placeholder.Line length="short"/>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Form.Field>
                            <Form.Field fluid>
                              <Placeholder fluid>
                                <Placeholder.Line length="short"/>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Form.Field>
                            <Form.Field fluid>
                              <Placeholder fluid>
                                <Placeholder.Line length="short"/>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Form.Field>
                          </React.Fragment>
                        )
                      }
                    </Form.Group>
                  </Form>
                </Grid.Column>
              </Grid>
              <Divider/>
              <Grid columns={1}>
                <Grid.Column>
                  <Table basic id="compareListTable">
                    {
                      (props.vendorsList) ? (
                        Object.keys(props.vendorsList).map((rowKey) => (
                          <Table.Row>
                            <Table.Cell>
                              {props.vendorsList[rowKey]['name']}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              <Image
                                alt="banner"
                                src={props.vendorsList[rowKey]['image']}
                              />
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              {props.vendorsList[rowKey]['user_used']} users used this coupon
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              <Checkbox
                                label="Add to comparison"
                                value={props.vendorsList[rowKey]['id']}
                                onChange={props.handleInputChangeAddComprassion}
                                checked={props.checkCompareVendorChecked(props.vendorsList[rowKey]['id'])}
                                disabled={props.checkCompareVendorDisabled(props.vendorsList[rowKey]['id'])}
                              />
                            </Table.Cell>
                          </Table.Row>
                        ))
                      ) : (
                        Object.keys(loaderItems).map((rowKey) => (
                          <Table.Row>
                            <Table.Cell>
                              <Placeholder fluid>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              <Placeholder fluid>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              <Placeholder fluid>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              <Placeholder fluid>
                                <Placeholder.Line length="full"/>
                              </Placeholder>
                            </Table.Cell>
                          </Table.Row>
                        ))
                      )
                    }
                  </Table>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default CompareView
