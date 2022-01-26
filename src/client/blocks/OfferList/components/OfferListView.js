import React from 'react'
import PropTypes from 'prop-types'
//import '../assets/OfferListView.scss'

import {
    Grid, 
    Icon, 
    Dropdown
} from 'semantic-ui-react'


const sortByOptions = [
    {
        key: 'recommended',
        text: 'Recommended',
        value: 'recommended',
        content: 'Recommended',
    },
    {
        key: 'low price',
        text: 'Low price',
        value: 'low price',
        content: 'Low price',
    },
    {
        key: 'high price',
        text: 'High price',
        value: 'high price',
        content: 'High price',
    },
]

const loaderItems = [
    1,2,3,4,5,6,7,8,9,0
]

export const OfferListView = (props) => (
    <React.Fragment>
        <div className='sort-by-block'>
            Sort by:
            <Dropdown
                inline
                name='sort'
                value={ props.sortData['sort'] }
                options={ sortByOptions }
                defaultValue={ sortByOptions[0].value }
                onChange={ props.handleInputChangeSort }
            />
        </div>
        <div>
            <Grid id='couponsBlock'>
                { 
                    props.loading ? (
                        Object.keys(loaderItems).map((rowKey) => (
                            props.getOfferLoadingRow()
                        ))
                    ) : (
                        Object.keys(props.offers).map((rowKey) => (
                            (function() {
                                switch (props.offers[rowKey]['category']) {
                                  case 'bundle':
                                    return props.getOfferBundleRow(props.offers[rowKey])
                                  case 'vpn':
                                  default:
                                    return props.getOfferVpnRow(props.offers[rowKey])
                                }
                            })()
                        ))
                    )
                }
            </Grid>
        </div>
    </React.Fragment>
)

export default OfferListView
