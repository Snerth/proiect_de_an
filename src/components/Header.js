import React, { PureComponent } from 'react'
import '../css/header.css'
import Report from './Report'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showReport: false
        }
    }
    toggleReport = () => {
        this.setState({
            showReport: !this.state.showReport
        })
    }

    render() {
        return (
            <>
                <div className='header-container'>
                    <div>
                        <p>PRODUCT ACTIVITY</p>
                    </div>
                    <div className='header-report-container'>
                        <p>ADD A REPORT</p>
                        <button className='report-button' onClick={this.toggleReport}>{
                            this.state.showReport ? '-' : '+'
                        }</button>
                    </div>
                </div>
                <div>
                    {this.state.showReport && <Report/>}
                </div>
            </>
        )
    }
}

export default Header