import React, { PureComponent } from 'react'
import '../css/period.css'

class SalesPeriod extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='period-container'>
                <p>{this.props.salesPeriod}</p>
            </div>
        )
    }
}

export default SalesPeriod