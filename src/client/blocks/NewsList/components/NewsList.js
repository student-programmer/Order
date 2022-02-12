import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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

export const NewsList = (props) => (
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
                    <Container className="NewsListChild"> 
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column computer={6}>
                            <Image  verticalAlign='middle'
                            alt="news-image"
                            src={ props.data[rowKey]['image'] }
                            size='medium'
                        /> </Grid.Column>
                     
                            <Grid.Column computer={10}>
                                <Grid.Row>
                            <Header as="h1">
                                { props.data[rowKey]['title'] }
                            </Header>
                            </Grid.Row>
                            <Grid.Row> 
                                { props.data[rowKey]['description'] }
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

export default NewsList
