import React, { PureComponent } from 'react'
import '../css/shopStatistics.css'
import Shops from './Shops'

class ShopStatistics extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Shops />
            </div>
        )
    }
}

export default ShopStatistics