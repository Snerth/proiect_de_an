import React, { PureComponent } from 'react'
import '../css/reportItem.css'

class ReportExportedItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log(this.props.dateExported)
        return (
            <div className='report-item-container'>
                <p className='date-p'>DATE: (YYYY-MM-DD)</p>
                <input 
                    className='date'
                    onChange={this.props.handleExportedDateChange}
                    />
                <div>
                    <p className='item'>ITEM</p>
                    <select onChange={this.props.handleExportedSelect}>
                        {
                            this.props.listOfItems.map(item => {
                                return <option>{item}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <p className='date-p'>QUANTITY:</p>
                    <input 
                        className='date'
                        onChange={this.props.handleExportedQuantity}
                    />
                </div>
                <button className='add-button' onClick={this.props.toggleAdd}>ADD</button>
            </div>
        )
    }
}

export default ReportExportedItem