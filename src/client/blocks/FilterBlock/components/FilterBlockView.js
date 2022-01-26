import React from 'react'
import PropTypes from 'prop-types'

import { Form, Placeholder } from 'semantic-ui-react'

export const FilterBlockView = (props) => (
    <Form>
        { 
            (props.filter) ? (
                Object.keys(props.filter).map((key) => (
                    <React.Fragment>
                        <Form.Group inline className='subheader'>
                            <label className='subheader'>{ props.filter[key]['title'] }</label>
                        </Form.Group>
                        { props.getInput(key, props.filter[key]) }
                    </React.Fragment>
                ))
            ) : (
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

        <Form.Button
            className='center-button'
            primary
            content={ props.buttonTitle }
            onClick={ props.handleClickFindButton }
            disabled={ !props.filter }
        />
    </Form>
)

export default FilterBlockView