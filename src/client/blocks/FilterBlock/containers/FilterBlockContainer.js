import React from 'react';

import { Form } from 'semantic-ui-react'

import FilterBlockView from '../components/FilterBlockView'

import {
    getFilterList
} from '../../../api/filter'

class FilterBlockContainer extends React.Component{
    constructor(props, context) {
        super(props, context)

        this.state = {
            loading     : 0,
            buttonTitle : props.buttonTitle,
            filter     : false,
            filterData : {},
        }

        this.getFilterList()
    }

    getFilterList = () => {
        let {
            searchData
        } = this.props

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
    }

    handleInputChangeEdit = (e, { name, value }) => {
        e.preventDefault()
        let { filterData } = this.state

        filterData[name] = value
        this.setState({
            filterData: filterData
        });
    }

    handleClickFindButton = () => {
        let {
            filterData
        } = this.state

        this.props.actionClickFind(filterData)
    }

    render() {
        return <FilterBlockView
                    { ...this.state }
                    getInput={ this.getInput }
                    handleClickFindButton={ this.handleClickFindButton }
                />
    }
}

export default FilterBlockContainer
