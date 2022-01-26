import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Container,
  Breadcrumb,
  Tab
} from 'semantic-ui-react'

const head = (url) => {
  const pageUrl = (typeof url !== 'undefined') ? url : ''
  let canonical = 'https://savingsdealz.com' + pageUrl
  return (
    <Helmet key={Math.random()}>
      <title>Savingsdealz</title>
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href={canonical}/>
    </Helmet>
  )
}

export const AccountView = (props) => (
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
          Account
        </Breadcrumb.Section>
      </Breadcrumb>

      <Tab id="accountBlock" panes={props.getPanes()}/>
    </Container>
  </div>
)

export default AccountView
