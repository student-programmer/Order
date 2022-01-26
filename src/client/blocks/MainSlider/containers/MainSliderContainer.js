import React from 'react';

import MainSliderView from '../components/MainSliderView'

import {
    getSliderList
} from '../../../api/slider'

class MainSliderContainer extends React.Component{
    constructor(props, context) {
        super(props, context)

        this.state = {
            loading : 0,
            slides  : false
        }

        this.getSliderList()
    }

    getSliderList = () => {
        let result = getSliderList();

        result.then(
            result => {
                let {
                    status,
                    rows,
                } = result
                if (status) {
                    this.setState({
                        slides : rows,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    render() {
        return <MainSliderView
                    { ...this.state }
                />
    }
}

export default MainSliderContainer
