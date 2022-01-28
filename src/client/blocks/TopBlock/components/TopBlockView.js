import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { 
    Item,
    Placeholder
} from 'semantic-ui-react'

const loaderItems = [
    1, 2, 3
]

export const TopBlockView = (props) => (
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
                    <Item>
                        <Item.Image  verticalAlign='middle'
                            alt=""
                            src={ props.data[rowKey]['image'] }
                            size='tiny'
                        />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header
                                as={ Link }
                                to={ props.data[rowKey]['url'] }
                            >
                                { props.data[rowKey]['title'] }
                            </Item.Header>
                            <Item.Meta>
                                <Link
                                    to={ props.data[rowKey]['vendor_url'] }
                                >
                                    Visit { props.data[rowKey]['vendor_name'] }
                                </Link>
                            </Item.Meta>
                            <Item.Description>
                                { props.data[rowKey]['description'] }
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))
            )
        }
    </Item.Group>
)

export default TopBlockView
