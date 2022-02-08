import React from 'react';

import { ArticlesList } from '../components/ArticlesList'

class ArticlesListContainer extends React.Component{
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
        return <ArticlesList
                    { ...this.state }
                />
    }
}

export default ArticlesListContainer