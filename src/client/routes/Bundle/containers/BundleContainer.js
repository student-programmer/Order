import React from 'react'
import { connect } from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import BundleView from '../components/BundleView'

import {
    getFilterList
} from '../../../api_test/filter'

import {
    cloneObject
} from '../../../inc/inc'

import { fetchCartOffers }  from '../../../actions/getCartOffers'

const mapDispatchToProps = {
    fetchCartOffers
}

const mapStateToProps = (store) => ({
    getCartOffers  : store.getCartOffers
})

class BundleContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading    : 0,
            filter     : false,
            filterData : {},
            searchData : { 'category' : 'bundle' }
        }

        this.getFilterList()
    }

    getFilterList = () => {
        let {
            searchData
        } = this.state

        let result = getFilterList(searchData);

        result.then(
            result => {
                let {
                    status,
                    rows,
                } = result
                if (status) {
                    this.setState({
                        filter : rows,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    actionCheckedBrands = (brands) => {
        let {
            searchData
        } = this.state
        let br = cloneObject(brands)
        let sD = cloneObject(searchData)
        sD['brands'] = br

        this.setState({
            searchData: sD
        })
    }

    actionClickFind = (filterData) => {
        let {
            searchData
        } = this.state
        let br = cloneObject(filterData)
        let sD = cloneObject(searchData)

        let array = Object.assign(br, sD);

        this.setState({
            searchData: array
        })
    }

    render() {
        return <BundleView
                    { ...this.state }

                    actionClickFind={ this.actionClickFind }
                    actionCheckedBrands={ this.actionCheckedBrands }
                />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BundleContainer))
