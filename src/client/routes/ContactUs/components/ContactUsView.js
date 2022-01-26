import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Container,
  Breadcrumb,
  Segment,
  Header,
  Form
} from 'semantic-ui-react'

const options = [
  { key: 'cooperation', text: 'Cooperation', value: 'cooperation' },
]

const head = (url) => {
  return (
    <Helmet key={Math.random()}>
      <title>Savingsdealz</title>
      <meta name="robots" content="index, follow"/>
    </Helmet>
  )
}

export const ContactUsView = (props) => (
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
          Contact us
        </Breadcrumb.Section>
      </Breadcrumb>

      <Segment id="signinBlock">
        <Header
          as="h1"
          textAlign="center"
        >
          Contact us
        </Header>

        <Form>
          <Form.Input
            fluid
            label="Email"
            placeholder="Email"
            required
          />
          <Form.Select
            label="Question"
            options={options}
            defaultValue={options[0].value}
            required
          />
          <Form.TextArea
            label="Message"
            required
          />
          <Form.Button
            primary
            fluid
            color="red"
            content="Sent"
          />
        </Form>
      </Segment>
    </Container>
  </div>
)

export default ContactUsView
