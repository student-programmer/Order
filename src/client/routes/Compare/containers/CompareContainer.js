import React from 'react'

import { Form } from 'semantic-ui-react'

import CompareView from '../components/CompareView'

import {
    getVendorsList
} from '../../../api_test/vendor'

import {
    getFilterList
} from '../../../api_test/filter'
import { Redirect, useHistory } from 'react-router'

class CompareContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading   : 0,
            vendorsList: false,
            compareVendors: {},

            filter     : false,
            filterData : { category: 'vpn' },
        }

        this.getVendorsList()
        this.getFilterList()
    }

    getVendorsList = () => {
        let {
            filterData
        } = this.state

        this.setState({
            vendorsList: false
        })

        let result = getVendorsList(filterData);
        result.then(
            result => {
                let {
                    status,
                    rows
                } = result

                if (status) {
                    this.setState({
                        vendorsList : rows,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    getVendorsListOptions = () => {
        let {
            vendorsList
        } = this.state

        let options = []

        for (let key in vendorsList) {
            options.push({
                key   : vendorsList[key]['id'],
                value : vendorsList[key]['id'],
                text  : vendorsList[key]['name'],
            })
        }

        return options
    }

    handleInputChangeVendors = (e, { name, value }) => {
        e.preventDefault()
        let { compareVendors } = this.state

        compareVendors[name] = value
        this.setState({
            compareVendors: compareVendors
        });
    }

    getCompareUrl = () => {
        let {
            compareVendors
        } = this.state

        if (!compareVendors) return false

        let {
            vendor1,
            vendor2,
            vendor3
        } = compareVendors

        let url = '/compare-'

        let vendorArray = []

        if (vendor1) {
            vendorArray.push(this.checkVendorToUrl(vendor1))
        }

        if (vendor2) {
            vendorArray.push(this.checkVendorToUrl(vendor2))
        }

        if (vendor3) {
            vendorArray.push(this.checkVendorToUrl(vendor3))
        }

        url += vendorArray.join('-with-')
        
        // const pageUrl = ( url == '/compare-') ? '/compare' : url;

        return url

    }

    checkVendorToUrl = (vendorId) => {
        let {
            vendorsList
        } = this.state

        if (!vendorId) return ''

        let vendorName = '';

        for(let k in vendorsList) {
            if (!vendorsList[k]) continue

            if (vendorsList[k]['id'] == vendorId) {
                vendorName = vendorsList[k]['name']
                break
            }
        }

        return vendorName.replace(/\s/ig, '-').replace('/', '-').toLowerCase()
    }


    getFilterList = () => {
        let {
            filterData
        } = this.state

        let result = getFilterList(filterData);

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

    getInput = (key, row) => {
        let {
            filterData
        } = this.state

        let {
            type,
            title,
            multiple,
            data
        } = row

        if (!type) type = 'text'

        let input = false
        switch(type) {
            case 'text':
            case 'number':
            case 'email':
                input = (
                    <Form.Input
                        fluid
                        type={ type }
                        placeholder={ title }
                        name={ key }
                        value={ filterData[key] || '' }
                        onChange={ this.handleInputChangeEdit }
                        />
                )
                break;
            case 'dropdown':
                let options = []

                for(let k in data) {
                    options.push(
                        {
                            key   : k + data[k]['id'],
                            text  : data[k]['name'],
                            value : data[k]['id']
                        },
                    )
                }

                input = (
                    <Form.Select
                        fluid
                        inline
                        name={ key }
                        options={ options }
                        placeholder={ title }
                        multiple={ multiple ? true : false}
                        value={ multiple ? (filterData[key] ? filterData[key] : []) : filterData[key] }
                        onChange={ this.handleInputChangeEdit }
                    />
                )
                break;
            case 'checkbox':
                input = []

                for(let k in data) {
                    input.push(
                        <Form.Checkbox
                            label={ data[k]['name'] }
                            value={ data[k]['name'] }
                            name={ key }
                            onChange={ this.handleInputChangeCheckBox }
                            checked={ (filterData).hasOwnProperty(key) == true && (filterData[key]).indexOf(data[k]['name']) != -1 }
                        />
                    )
                }
                break;
        }

        return input
    }

    handleInputChangeCheckBox = (e, { name, value }) => {
        let {
            filterData
        } = this.state

        if (filterData.hasOwnProperty(name) && filterData[name].indexOf(value) !== -1) {
            filterData[name].splice(filterData[name].indexOf(value), 1)
        } else {
            if (!filterData.hasOwnProperty(name)) {
                filterData[name] = []
            }

            filterData[name].push(value)
        }

        this.setState({
            filterData: filterData
        });

        this.getVendorsList()
    }

    handleInputChangeAddComprassion = (e, { value }) => {
        let {
            compareVendors
        } = this.state

        if (compareVendors['vendor1'] == value) {
            compareVendors['vendor1'] = null
        } else if (compareVendors['vendor2'] == value) {
            compareVendors['vendor2'] = null
        } else if (compareVendors['vendor3'] == value) {
            compareVendors['vendor3'] = null
        } else if (!compareVendors['vendor1']) {
            compareVendors['vendor1'] = value
        } else if (!compareVendors['vendor2']) {
            compareVendors['vendor2'] = value
        } else if (!compareVendors['vendor3']) {
            compareVendors['vendor3'] = value
        }

        this.setState({
            compareVendors: compareVendors
        });
    }

    handleInputChangeEdit = (e, { name, value }) => {
        e.preventDefault()
        let { filterData } = this.state

        filterData[name] = value

        this.setState({
            filterData: filterData
        });

        this.getVendorsList()
    }

    checkCompareVendorDisabled = (vendorId) => {
        let {
            compareVendors
        } = this.state

        if (vendorId == compareVendors['vendor1'] || vendorId == compareVendors['vendor2'] || vendorId == compareVendors['vendor3']) return false

        return (compareVendors['vendor1'] && compareVendors['vendor2'] && compareVendors['vendor3']) ? true : false
    }

    checkCompareVendorChecked = (vendorId) => {
        let {
            compareVendors
        } = this.state

        if (vendorId == compareVendors['vendor1'] || vendorId == compareVendors['vendor2'] || vendorId == compareVendors['vendor3']) return true

        return false
    }


    checkCompareVendorButtonDisabled = () => {
        let {
            compareVendors
        } = this.state

        let i = 0;

        if (compareVendors['vendor1']) {
            i++
        }

        if (compareVendors['vendor2']) {
            i++
        }

        if (compareVendors['vendor3']) {
            i++
        }

        return i < 2 ? true : false
    }


    render() {
        return <CompareView
                    {...this.state}
                    getVendorsListOptions={ this.getVendorsListOptions }

                    handleInputChangeVendors={ this.handleInputChangeVendors }

                    getCompareUrl={ this.getCompareUrl }

                    getInput={ this.getInput }
                    handleInputChangeEdit={ this.handleInputChangeEdit }

                    handleInputChangeAddComprassion={ this.handleInputChangeAddComprassion }
                    checkCompareVendorDisabled={ this.checkCompareVendorDisabled }
                    checkCompareVendorChecked={ this.checkCompareVendorChecked }

                    checkCompareVendorButtonDisabled={ this.checkCompareVendorButtonDisabled }
                    checkUrl={ this.checkUrl}
                />
    }
}

export default CompareContainer
