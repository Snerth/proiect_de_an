import React, { PureComponent } from 'react'
import '../css/reportItem.css'

class ReportItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        return (
            <div className='report-item-container'>
                <div className='container'>
                    <div>
                        <p className='date-p'>DATE (YYYY-MM-DD)</p>
                        <input
                            className='date'
                            onChange={this.props.handleDateChange}
                        />
                    </div>
                    <div>
                        <p className='item'>ITEM</p>
                        <select onChange={this.props.handleSelect}>
                            {
                                this.props.listOfItems.map(item => {
                                    return <option>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <p className='date-p'>QUANTITY:</p>
                    <input 
                        className='date'
                        onChange={this.props.handleQuantity}
                    />
                </div>
                <button className='add-button' onClick={() => {
                    this.props.toggleAdd()
                    this.props.addPurchase()}}>ADD</button>
            </div>
        )
    }
}

export default ReportItem