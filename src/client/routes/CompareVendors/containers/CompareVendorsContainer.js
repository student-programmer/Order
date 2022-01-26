import React from 'react'

import {
    Image,
    Checkbox,
    Modal,
    Header
} from 'semantic-ui-react'

import CompareVendorsView from '../components/CompareVendorsView'

import {
    getCompareVendorsInfo
} from '../../../api/vendor'

class CompareVendorsContainer extends React.Component{
    constructor(props) {
        super(props);

        let vendorsStr = props.match.params.vendors;
        let vendors = this.parseType(vendorsStr);

        this.state = {
            loading     : 0,
            vendors     : vendors,
            info        : false,
            compareInfo : false
        }

        this.getCompareVendorsInfo()
    }

    parseType = (vendorsStr) => {
        let str = vendorsStr.replace('compare-', '')

        let arr = str.split('-with-');

        return arr
    }

    getCompareVendorsInfo = () => {
        let {
            vendors
        } = this.state

        let result = getCompareVendorsInfo(vendors);

        result.then(
            result => {
                let {
                    status,
                    info,
                    rows
                } = result

                if (status) {
                    this.setState({
                        info        : info,
                        compareInfo : rows,
                    })
                }
            },
            error => {
              alert("Rejected: " + error); // error - аргумент reject
            }
        );
    }

    getTableCell = (type, cell) => {
        switch(type) {
            case 'image':
                return <Image src={cell} />
                break;
            case 'text':
                return cell
                break;
            case 'checkbox':
                if (parseInt(cell)) {
                    return <Image src='/images/check.png' />
                } else {
                    return <Image src='/images/cancel.png' />
                }
                break;
            case 'dropdown':
                let countries = []
                let i = 1
                for (let k in cell) {
                    countries.push(cell[i])
                    i++;
                    if (i >= 8) {
                        break;
                    }
                }

                return (
                    <React.Fragment>
                        { countries.join(', ') }
                        <Modal
                            trigger={<span className='more-button'>more</span>}
                            size='mini'
                            dimmer='inverted'
                            className='modal-countries'
                            closeIcon
                        >
                            <Modal.Content image scrolling>
                                <Modal.Description>
                                    <Header>All countries</Header>
                                    {Object.keys(cell).map((key) => (
                                        <p>{ cell[key] }</p>
                                    ))}
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </React.Fragment>
                )

                break;
        }
    }

    render() {
        return <CompareVendorsView
                    {...this.state}

                    getTableCell={ this.getTableCell }
                />
    }
}

export default CompareVendorsContainer
