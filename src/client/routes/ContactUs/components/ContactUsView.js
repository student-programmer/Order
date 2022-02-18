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
      <title>Contact us</title>
      <meta name="robots" content="all"/>
      <meta name="description" content="Find out how we find the best products and services to help you easily compare and make the right buying decisions"/>
    </Helmet>
  )
}

export const ContactUsView = (props) => (
  <div>

  <h1 className='block-title marginContackt contact-header'>Сontact details </h1>
  <h2 className='block-title2 marginContackt contact-header2'>Savingsdealz is a comparison platform</h2>
           
    {head(props.url)}
    <Container className="containerContacktUs">
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
