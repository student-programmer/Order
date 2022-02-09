import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Grid,
  Container

} from 'semantic-ui-react'
import {
  getFAQlist
} from '../../../api_test/faq'
import QuestionList from '../../../blocks/QuestionList'
const head = () => {
  return (
    <Helmet key={Math.random()}>
              <title>FAQ</title>
      <meta property="og:title" content="FAQ" />
      <meta property="og:url" content="https://savingsdealz.com/articles" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="description" content="FAQ in the best VPN site"/>
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

export const QuestionView = (props) => (
 <div>
     {head()}
   <Container> 
     <Grid > 
      <Grid.Row columns={1} textAlign="center"> 
      <Grid.Column> 
  <QuestionList  getData={getFAQlist}/>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </Container>
 </div>

)

export default QuestionView
