import React, { PureComponent } from 'react'
import '../css/cityStatistics.css'

class CityStatistics extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='city-statistics-container'>
                <p>STATISTICS OF {this.props.city}</p>
            </div>
        )
    }
}

export default CityStatistics