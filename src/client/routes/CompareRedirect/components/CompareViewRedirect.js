import React from 'react'
import { Redirect } from 'react-router-dom'
const head = (url) => {

  return (
    
    <Helmet key={Math.random()}>
      <title>2022’s VPN Compare Tool – Free and Good</title>
      <meta property="og:title" content="2022’s VPN Compare Tool – Free and Good" />
      <meta property="og:url" content="https://savingsdealz.com/compare" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="description" content="Compare the best VPNs and find yours now. VPN experts compare and rate the best VPNs on the market in 2022. "/>
      <meta name="robots" content="noindex, nofollow"/>
    </Helmet>
  )
}

export const CompareViewRedirect = (props) => (
  <div>
    {head(props.url)}
    <div>Loading...</div>
    <Redirect to="/compare"/>
  </div>
)

export default CompareViewRedirect

