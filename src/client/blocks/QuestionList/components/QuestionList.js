import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import '../assets/ArticlesList.scss';

import { 
    Accordion, Icon, Item, Placeholder
} from 'semantic-ui-react'

const loaderItems = [
    1, 2, 3
]

export const QuestionList = ({activeIndex, handleClick, data}) => (
    <Item.Group divided id='bestVpnDeals'>
        { 
            (!data) ? (
                Object.keys(loaderItems).map((rowKey) => (
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                            </Placeholder.Header>
                        </Placeholder>
                ))
            ) : (
                Object.keys(data).map((rowKey) => (
                    <Accordion styled className="accordingInFaq">
                    <Accordion.Title
                      active={activeIndex === data[rowKey]['index']}
                      index={data[rowKey]['index']}
                      onClick={handleClick}
                    >
                      <Icon name='dropdown' />
                      { data[rowKey]['question'] }
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === data[rowKey]['index']}>
                      <p>
                      { data[rowKey]['answer'] }
                      </p>
                    </Accordion.Content>
                  </Accordion>
              ))
            )
        } 
    </Item.Group>
)

export default QuestionList
