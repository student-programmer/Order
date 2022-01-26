import React from 'react';

import BrandListView from '../components/BrandListView'

import {getBrandList} from '../../../api/brand'

class BrandListContainer extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            loading: 0,
            searchData: props.searchData,
            brands: false,
            checkBrands: [],
        }

        this.getBrandList()
    }

    getBrandList = () => {
        let {
            searchData
        } = this.state

        let result = getBrandList(searchData);

        result.then(
            result => {
                let {
                    status,
                    rows,
                } = result
                if (status) {
                    this.setState({
                        brands: rows,
                    })
                }
            },
            error => {
                alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    handleInputChangeCheckBox = (e, {value}) => {
        let {
            checkBrands
        } = this.state

        if (checkBrands.indexOf(value) !== -1) {
            checkBrands.splice(checkBrands.indexOf(value), 1)
        } else {
            checkBrands.push(value)
        }

        this.props.actionCheckedBrands(checkBrands)

        this.setState({
            checkBrands: checkBrands
        });
    }

    render() {
        return <BrandListView
            {...this.state}

            handleInputChangeCheckBox={this.handleInputChangeCheckBox}
        />
    }
}

export default BrandListContainer
