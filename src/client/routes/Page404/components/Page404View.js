import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, Segment, Header } from 'semantic-ui-react'

const head = () => {
  let canonical = "https://savingsdealz.com";
  return (
    <Helmet key={Math.random()}>
      <title>404 Page not found | Savingsdealz</title>
      <meta name='robots' content='noindex, nofollow' />
      <link rel='canonical' href={canonical} />
    </Helmet>
  )
}

export const Page404View = () => (
  <div>
    { head()}
    <Container>
      <Segment>
        <Header as='h1' textAlign='center'>
          404
          <Header.Subheader>
            The page you requested cannot be found!
            Perhaps it was deleted, or you entered an invalid address.
          </Header.Subheader>
        </Header>
        <p>In any case, we will help to find the necessary information for you - you can return to the <Link to='/'>main page</Link> to get started with her search for the information you need.</p>
      </Segment>
    </Container>
  </div>
)

export default Page404View
