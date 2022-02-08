import React from 'react';

import { NewsList } from '../components/NewsList'

class NewsListContainer extends React.Component{
    constructor(props, context) {
        super(props, context)
        
        this.state = {
            loading : 0,
            data    : false,
        }
        
        this.getData()
    }
    
    getData = () => {
        let result = this.props.getData();

        result.then(
            result => {
                let {
                    status,
                    rows,
                } = result
                if (status) {
                    this.setState({
                        data : rows,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }
        
    render() {
        return <NewsList
                    { ...this.state }
                />
    }
}

export default NewsListContainer