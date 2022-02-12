import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import '../assets/ArticlesList.scss';

import { 
    Grid,
    Item,
    Image,
    Header,
    Container, 
    Placeholder
} from 'semantic-ui-react'

const loaderItems = [
    1, 2, 3
]

export const ArticlesList = (props) => (
    <Item.Group divided id='bestVpnDeals'>
        { 
            (!props.data) ? (
                Object.keys(loaderItems).map((rowKey) => (
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                        </Placeholder>
                ))
            ) : (
                Object.keys(props.data).map((rowKey) => (
                    <Container className="articlesList"> 
                     <Grid>
                        <Grid.Row >
              
                     
                            <Grid.Column >
                                <Grid.Row>
                            <Header as="h1">
                                { props.data[rowKey]['title'] }
                            </Header>
                            </Grid.Row>
                            <Grid.Row> 
                            <Grid.Column textAlign='left' computer={6}>
                            <p>
                            <Image 
                            className="newsImage"
                            alt="news-image"
                            align="left"
                            src={ props.data[rowKey]['image'] }
                            size='medium'
                            vspace="5" hspace="5"
                        />  <p className="articlesText">{ props.data[rowKey]['description'] }</p> </p> 
                        </Grid.Column>
                                
                                </Grid.Row>
                            </Grid.Column>
                            </Grid.Row>
                    </Grid>
                    </Container>
                ))
            )
        }
    </Item.Group>
)

export default ArticlesList
