import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Grid,
  Image,
  Button,
  Tab,
  Card,
  Container, 
  Header,
  GridColumn
} from 'semantic-ui-react'
import NewsList from '../../../blocks/NewsList'
import {
  getNewsList
} from '../../../api_test/news'
const head = () => {
  return (
    <Helmet key={Math.random()}>
      <title>News</title>
      <meta property="og:title" content="News" />
      <meta property="og:url" content="https://savingsdealz.com/news" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="description" content="News in the best VPN site"/>
      <meta name="robots" content="index, follow"/>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "savingsdealz",
          url: "https://savingsdealz.com/",
        }
    `}</script>
    </Helmet>

  )
}

export const NewsView = (props) => (

 <div>
     {head()}
   <Container> 
     <Grid > 
      <Grid.Row columns={1} textAlign="center"> 
      <Grid.Column> 
  <NewsList getData={getNewsList}/>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </Container>
 </div>

)

export default NewsView
