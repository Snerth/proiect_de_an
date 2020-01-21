import React, { PureComponent } from 'react'
import '../css/period.css'

class ExportsPeriod extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='period-container'>
                <p>{this.props.exportsPeriod}</p>
            </div>
        )
    }
}

export default ExportsPeriod