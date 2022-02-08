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
                    <Container> 
                    <Grid>
                        <Grid.Row columns={1}>
                    
                        <Grid.Column verticalAlign='middle'>
                            <Header as="h1">
                                { props.data[rowKey]['title'] }
                            </Header>
                            <Image  verticalAlign='middle'
                            alt="news-image"
                            src={ props.data[rowKey]['image'] }
                            size='big'
                        />
                            <Grid.Column>
                                { props.data[rowKey]['description'] }
                            </Grid.Column>
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
