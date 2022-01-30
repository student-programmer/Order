import React from 'react'

import VendorView from '../components/VendorView'

import { getVendorInfo } from '../../../api_test/vendor'

class VendorContainer extends React.Component{
    constructor(props) {
        super(props);

        let vendor = props.match.params.vendor;
        let vendorId = this.parseType(vendor);

        this.state = {
            loading   : 0,
            activeIndex : 0,
            vendorId: vendorId,
            info: false
        }

        this.getVendorInfo()
    }

    parseType = (vendor) => {
        let arr = vendor.split('-');

        return arr[arr.length-1]
    }

    getVendorInfo = () => {

        let {
            vendorId
        } = this.state

        let result = getVendorInfo({ vendorId: vendorId });
        result.then(
            result => {
                let {
                    status,
                    row
                } = result

                if (status) {
                    this.setState({
                        info : row,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    handleClickAccordion = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({
            activeIndex: newIndex
        })
    }

    getCategoryUrl = () => {
        let {
            info
        } = this.state

        if (!info) return ''

        let {
            category
        } = info

        switch(category.toLowerCase()) {
            case 'vpn':
                return '/vpn'
                break;
            case 'bundle':
                return '/bundle'
                break;
        }
    }

    render() {
        return <VendorView
                    {...this.state}
                    handleClickAccordion={ this.handleClickAccordion }

                    getCategoryUrl={ this.getCategoryUrl }
                />
    }
}

export default VendorContainer
