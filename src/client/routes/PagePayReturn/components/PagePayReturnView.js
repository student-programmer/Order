import React from 'react'
import { Helmet } from 'react-helmet'
import { Container, Segment, Header, Form, Modal } from 'semantic-ui-react'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : '';
  let canonical = "https://savingsdealz.com" + pageUrl;
  return (
    <Helmet key={Math.random()}>
      <title>Page payment return | Savingsdealz</title>
      <meta name="robots" content="no index, no follow"/>
      <link rel="canonical" href={canonical}/>
    </Helmet>
  )
}

export const PagePayReturnView = (props) => (
  <div>
    {head(props.url)}
    <Container>
      <Segment>
        <Header as="h1" textAlign="center">
          Your payment is accepted.
          <Header.Subheader>
            After a few minutes check your emails we sent you the data to activate the service.
          </Header.Subheader>
        </Header>
        <p>
          Enter your email to receive a coupon to activate your VPN premium account.
        </p>

        <Form>
          <Form.Input
            fluid
            name="email"
            label="Email"
            placeholder="Email"
            required
            onChange={props.handleChangeOrderEmail}
          />
          <Form.Button
            fluid
            color="red"
            content="SAVE"
            onClick={props.handleSavePayerEmail}
          />
        </Form>
      </Segment>
    </Container>
  </div>
)

export default PagePayReturnView
