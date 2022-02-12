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
import ArticlesList from '../../../blocks/ArticlesList'
import {
  getArticlesList
} from '../../../api_test/articles'
const head = () => {
  return (
    <Helmet key={Math.random()}>
              <title>Articles</title>
      <meta property="og:title" content="Articles" />
      <meta property="og:url" content="https://savingsdealz.com/articles" />
      <meta property="og:image" content="https://savingsdealz.com/images/logo.png" />
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="50"/>
      <meta property="og:image:height" content="50"/>
      <meta name="description" content="Articles in the best VPN site"/>
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

export const ArticlesView = (props) => (
 <div className="articlesBlock">
     {head()}
   <Container> 
   <Container>
    <Grid>
      <Grid.Row columns={1}>
              <Grid.Column className="block-title-articles">
              <Header as="h1" textAlign="center">
                Articles
                </Header>
              </Grid.Column>

           </Grid.Row>
      </Grid>
    </Container>
     <Grid > 
      <Grid.Row columns={1} textAlign="center"> 
      <Grid.Column> 
  <ArticlesList getData={getArticlesList}/>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </Container>
 </div>

)

export default ArticlesView
