import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Container,
  Breadcrumb,
  Grid,
  Segment,
  Header,
  Item,
  Input,
  Table,
  List,
  Button,
  Image,
  Checkbox,
  Divider,
  Modal,
  Form,
  Popup
} from 'semantic-ui-react'

const head = (url) => {
  return (
    <Helmet key={Math.random()}>
      <title>Сheckout</title>
      <meta property="og:title" content="Checkout" />
      <meta property="og:url" content="https://savingsdealz.com/checkout" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="robots" content="all"/>
      <meta name="description" content="Online shopping process, follow the steps indicated to complete the transaction"/>
    </Helmet>
  )
}

export const CheckoutView = (props) => (
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
          Checkout
        </Breadcrumb.Section>
      </Breadcrumb>
      <Container >
    <Grid>
      <Grid.Row columns={1}  textAlign="center">
              <Grid.Column textAlign="center" className="block-title-checkout" >
              <Header as="h1" textAlign="center">
              Checkout deals
        </Header>
        <Header.Subheader as="h2" >
        Online shopping model steps
            </Header.Subheader>
              </Grid.Column>
           </Grid.Row>
      </Grid>
    </Container>
      <Grid id="checkoutBlock">
        <Grid.Column computer={10} mobile={16}>  {/* width={10} */}
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h1"
                  >
                    Review item and shipping
                  </Header>

                  <Item.Group>
                    {Object.keys(props.offers).map((rowKey) => (
                      <Item key={'c-' + props.offers[rowKey]['id']}>
                        <Item.Image alt="$" size="tiny" src={props.offers[rowKey]['image']}/>

                        <Item.Content>
                          <Item.Header as="a">{props.offers[rowKey]['title']}</Item.Header>
                          <Item.Meta>{props.offers[rowKey]['subtitle']}</Item.Meta>
                          <Item.Extra>
                            <Input
                              className="quantity"
                              type="number"
                              name={props.offers[rowKey]['id']}
                              onChange={props.handleInputChangeQuantity}
                              value={props.offers[rowKey]['quantity']}
                              min={0}
                            />
                            <span className="price">
                                                            ${props.offers[rowKey]['price']}
                                                        </span>
                          </Item.Extra>
                          {(props.offers[rowKey]['user_used']) && (
                            <Item.Description>
                              {props.offers[rowKey]['user_used']} users used this coupon
                            </Item.Description>
                          )}
                        </Item.Content>
                      </Item>
                    ))}
                  </Item.Group>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h1"
                  >
                    Pay with
                  </Header>
                  <Table basic="very" verticalAlign="middle" collapsing id="paymentMethods">
                    {Object.keys(props.paymentMethods).map((rowKey) => (
                      <Table.Row>
                        <Table.Cell>
                          <Checkbox
                            size="big"
                            value={props.paymentMethods[rowKey]['id']}
                            onChange={props.handleChangePaymentMethod}
                            checked={props.checkPayment == props.paymentMethods[rowKey]['id']}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          <Image
                          alt="$"
                            className="payment-method-logo"
                            src={props.paymentMethods[rowKey]['image']}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          {props.paymentMethods[rowKey]['name']}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Grid.Column>
        <Grid.Column id="payBlock" computer={6} mobile={16}>
          <Segment>
            <List verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                  ${props.total['total']}
                </List.Content>
                <List.Content>Subtotal ({props.total['items']} item{props.total['items'] > 1 && 's'})</List.Content>
              </List.Item>
              {/*<List.Item>*/}
              {/*    <List.Content floated='right'>*/}
              {/*        free*/}
              {/*    </List.Content>*/}
              {/*    <List.Content>Shipping</List.Content>*/}
              {/*</List.Item>*/}
              {/*<List.Item>*/}
              {/*    <List.Content floated='right'>*/}
              {/*        ${ props.total['tax'] }*/}
              {/*    </List.Content>*/}
              {/*    <List.Content>Tax*</List.Content>*/}
              {/*</List.Item>*/}
              <Divider/>
              <List.Item className="order-total">
                <List.Content floated="right">
                  ${props.total['total']}
                </List.Content>
                <List.Content>Order total</List.Content>
              </List.Item>
            </List>
            {
              !props.checkPayment || props.total['total'] == 0 ?
                (
                  <Popup
                    content={props.total['total'] == 0 ? 'Item list is empty' : 'Please select payment method'}
                    on="click"
                    pinned
                    trigger={
                      <Button
                        fluid
                        color="red"
                        content="Confirm and pay"
                      />
                    }
                  />
                ) :
                (
                  <Button
                    fluid
                    color="red"
                    content="Confirm and pay"
                    disabled={!props.checkPayment || props.total['total'] == 0 ? true : false}
                    onClick={props.handleClickToPay}
                    loading={props.loadingPayButton}
                  />
                )
            }
          </Segment>
        </Grid.Column>
      </Grid>
      <Modal
        closeIcon
        dimmer="inverted"
        size="mini"
        open={props.openSendEmailModal}
      >
        <Modal.Header>Enter your email to receive a coupon to activate your VPN premium account.</Modal.Header>
        <Modal.Content className="coupon-modal">
          <Form>
            <Form.Input
              type="email"
              onChange={props.handleChangePayerEmail}
              value={props.payerEmail && props.payerEmail}
            />
            <Form.Button
              fluid
              color="red"
              content="PAY"
              onClick={props.handleClickToPay}
            />
          </Form>
        </Modal.Content>
      </Modal>
    </Container>
  </div>
)

export default CheckoutView
