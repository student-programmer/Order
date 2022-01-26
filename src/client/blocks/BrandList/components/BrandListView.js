import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Form, Placeholder } from 'semantic-ui-react'

export const BrandListView = (props) => (
    <React.Fragment>
        <div className='header'>
            Brands
        </div>
        <Form>
            {
                (props.brands) ?
                (
                    <Form.Group grouped>
                        {Object.keys(props.brands).map((rowKey) => (
                            <Form.Checkbox
                                onChange={ props.handleInputChangeCheckBox }
                                checked={ (props.checkBrands).indexOf(props.brands[rowKey]['id']) != -1 }
                                value={ props.brands[rowKey]['id'] }
                                label={ props.brands[rowKey]['name'] }
                            />
                        ))}
                    </Form.Group>
                ) :
                (
                    <Form.Field>
                        <Placeholder fluid>
                            <Placeholder.Line length='short' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='short' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='short' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                            <Placeholder.Line length='full' />
                        </Placeholder>
                    </Form.Field>
                )
            }
        </Form>
    </React.Fragment>
)

export default BrandListView