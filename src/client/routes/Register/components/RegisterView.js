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
  Message
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

export const RegisterView = (props) => (
  <div>
        <Header className='block-title' as="h1" textAlign="center">
      {/* <h1 className='block-title'>Checkout deals</h1> */}
      Find your VPN Online
  <Header.Subheader>
  Discover The Best VPN in Your Country
</Header.Subheader>
</Header>

    <Container>
      {head(props.url)}
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
          Register
        </Breadcrumb.Section>
      </Breadcrumb>

      <Segment id="registerBlock" loading={!props.loading}>
        <Header
          as="h1"
          textAlign="center"
        >
          Register for an Account
        </Header>

        <Form onSubmit={props.handleSubmit} error={props.error}>
          <Form.Group widths="equal">
            <Popup
              trigger={
                <Form.Input
                  fluid
                  name="email"
                  label="Email"
                  placeholder="Email"
                  required
                  onChange={props.handleInputChange}
                  error={props.email_error === true}
                />
              }
              content="Email address is not valid"
              open={props.email_error === true}
              position="left center"
            />
            <Form.Input
              fluid
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              required
              onChange={props.handleInputChange}
            />
            {props.error && (
              <Message
                error
                header={props.error['header']}
                content={props.error['content']}
              />
            )}
          </Form.Group>
          <div id="registerButton">
            <Form.Button
              primary
              content="Register"
            />
            <Link
              to="/signin"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </Form>
      </Segment>
    </Container>
  </div>
)

export default RegisterView
