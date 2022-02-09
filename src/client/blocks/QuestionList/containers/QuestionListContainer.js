import React from 'react';

import { QuestionList } from '../components/QuestionList'

class QuestionListContainer extends React.Component{
    constructor(props, context) {
        super(props, context)
        
        this.state = {
            loading : 0,
            data    : false,
            activeIndex: 0 
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

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  
        
    render() {
        const { activeIndex } = this.state
        const { data } = this.state

        return <QuestionList
                    handleClick={ this.handleClick}
                    // activeIndex={ this.activeIndex}
                    // data={ this.data}
                    { ...this.state }
                />
    }
}

export default QuestionListContainer