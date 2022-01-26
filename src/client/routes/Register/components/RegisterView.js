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
      <title>Register</title>
      <meta name="robots" content="noindex, nofollow"/>
    </Helmet>
  )
}

export const RegisterView = (props) => (
  <div>
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
