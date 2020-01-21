import React, { PureComponent } from 'react'
import '../css/period.css'

class ProfitPeriod extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div className='period-container'>
                    <p>{this.props.profitPeriod}</p>
                </div>
            </>
        )
    }
}

export default ProfitPeriod