import React from 'react'
import { connect } from 'react-redux'
import {
    withRouter
} from 'react-router-dom'

import VpnView from '../components/VpnView'

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

class VpnContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading    : 0,
            filter     : false,
            filterData : {},
            searchData : { 'category' : 'vpn' }
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
              alert("Rejected: " + error);
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
        return <VpnView
                    { ...this.state }
                    handleInputChangeCheckBox={ this.handleInputChangeCheckBox }
                    handleClickFindVpn={ this.handleClickFindVpn }

                    actionCheckedBrands={ this.actionCheckedBrands }
                    actionClickFind={ this.actionClickFind }
                />
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VpnContainer))
