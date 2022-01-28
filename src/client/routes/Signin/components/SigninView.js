import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Container,
  Segment,
  Form,
  Header,
  Breadcrumb,
  Popup,
  Message
} from 'semantic-ui-react'

const head = (url) => {
  return (
    <Helmet key={Math.random()}>
      <title>Signin</title>
      <meta name="robots" content="all"/>
      <meta name="description" content='Please log in. Stay on top of your professional world. By email or phone. Show password. Forgot password?'/>
    </Helmet>
  )
}

export const SigninView = (props) => (
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
          Sign In
        </Breadcrumb.Section>
      </Breadcrumb>

      <Segment id="signinBlock" loading={!props.loading}>
        <Header
          as="h1"
          textAlign="center"
        >
          Sign In
        </Header>

        <Form onSubmit={props.handleSubmit} error={props.error}>
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
          <Form.Button
            primary
            fluid
            content="Sign In"
          />
          <Link
            to="/register"
          >
            <Form.Button
              basic
              fluid
              color="red"
              content="Create your account"
            />
          </Link>
        </Form>
      </Segment>
    </Container>
  </div>
)

export default SigninView
