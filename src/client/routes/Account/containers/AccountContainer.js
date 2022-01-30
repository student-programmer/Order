import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {
  Form,
  Tab,
  Header,
  Table,
  Modal,
  Icon
} from 'semantic-ui-react'

import AccountView from '../components/AccountView'

import {
  getAccountInfo
} from '../../../api_test/user'

import {
  getAccountOrders
} from '../../../api_test/order'

class AccountContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: 0,
      accountInfo: false,
      orders: false,
    }

    this.getAccountInfo()
    this.getAccountOrders()
  }

  componentWillReceiveProps (nextProps) {
  }

  getAccountInfo = () => {
    let result = getAccountInfo()

    result.then(
      result => {
        let {
          status,
          row,
        } = result
        if (status) {
          this.setState({
            accountInfo: row,
          })
        }
      },
      error => {
        alert('Rejected: ' + error) // error - аргумент reject
      }
    )
  }

  getAccountOrders = () => {
    let result = getAccountOrders()

    result.then(
      result => {
        let {
          status,
          rows,
        } = result
        if (status) {
          this.setState({
            orders: rows,
          })
        }
      },
      error => {
        alert('Rejected: ' + error) // error - аргумент reject
      }
    )
  }

  getPanes = () => {
    let {
      accountInfo,
      orders
    } = this.state
    return [
      {
        menuItem: 'Account info',
        render: () => (
          <Tab.Pane>
            <Form className="edit-account-form">
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Your email"
                  placeholder="Your email"
                  value={accountInfo['email']}
                />
                <Form.Input
                  fluid
                  label="Your password"
                  placeholder="Your password"
                  type="password"
                  value={accountInfo['password']}
                />
              </Form.Group>
              <Form.Group widths="equal" className="edit-account-button">
                <Form.Button
                  basic
                  fluid
                  color="red"
                  content="Edit"
                />
                <Form.Button
                  primary
                  fluid
                  content="Save"
                />
              </Form.Group>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Purchase',
        render: () => (
          <Tab.Pane id="purchaseBlock">
            <Header
              as="h1"
              textAlign="center"
            >
              Your last purchase
            </Header>
            <Table
              basic
              celled
              textAlign="center"
            >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>№</Table.HeaderCell>
                  <Table.HeaderCell>Item</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Code</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {Object.keys(orders).map((rowKey) => (
                  <Table.Row>
                    <Table.Cell>
                      {parseInt(rowKey) + 1}
                    </Table.Cell>
                    <Table.Cell>
                      {orders[rowKey]['item']}
                    </Table.Cell>
                    <Table.Cell>
                      ${orders[rowKey]['price']}
                    </Table.Cell>
                    <Table.Cell>
                      <Modal
                        closeIcon
                        dimmer="inverted"
                        trigger={<a className="show-coupon">Show Code</a>}
                        size="mini"
                      >
                        <Modal.Content className="coupon-modal">
                          <p>
                            Your code - <span className="coupon">{orders[rowKey]['code']}</span>
                            <CopyToClipboard
                              text={orders[rowKey]['code']}
                            >
                              <Icon
                                name="copy outline"
                              />
                            </CopyToClipboard>
                          </p>
                          {(orders[rowKey]['link']) && (
                            <p>
                              Follow this link <a className="link" target="_blank"
                                                  href={orders[rowKey]['link']}>{orders[rowKey]['link']}</a> to activate
                              your code
                            </p>
                          )}
                        </Modal.Content>
                      </Modal>
                    </Table.Cell>
                  </Table.Row>
                ))}

              </Table.Body>
            </Table>
          </Tab.Pane>
        )
      },
    ]
  }

  render () {
    return <AccountView
      {...this.state}
      getPanes={this.getPanes}
    />
  }
}

export default AccountContainer
