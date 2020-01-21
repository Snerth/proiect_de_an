import React, { PureComponent } from 'react'
import '../css/regionStatistics.css'
import ProfitPeriod from './ProfitPeriod'
import SalesPeriod from './SalesPeriod'
import ExportsPeriod from './ExportsPeriod'

class RegionStatistics extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectedProfitOption: 'ALL TIME',
            selectedSalesOption: 'ALL TIME',
            selectedExportsOption: 'ALL TIME'
        }
    }
    handleProfitOnChange = e => {
        this.setState({
            selectedProfitOption: e.target.value
        })
    }
    handleSalesOnChange = e => {
        this.setState({
            selectedSalesOption: e.target.value
        })
    }
    handleExportsOnChange = e => {
        this.setState({
            selectedExportsOption: e.target.value
        })
    }
    render() {
        return (
            <div className='region-statistics-container'>
                <p className='region-statistics-container-p'>STATISTICS OF {this.props.region}</p>

                <div className='sales-container'>
                    <p>Total sales: 123</p>
                    <select onChange={e => this.handleSalesOnChange(e)}>
                        <option>ALL TIME</option>
                        <option>LAST WEEK</option>
                        <option>LAST MONTH</option>
                        <option>LAST YEAR</option>
                    </select>
                    <SalesPeriod salesPeriod={this.state.selectedSalesOption} />
                </div>

                <div className='sales-container'>
                    <p>Total exports: 34</p>
                    <select onChange={e => this.handleExportsOnChange(e)}>
                        <option>ALL TIME</option>
                        <option>LAST WEEK</option>
                        <option>LAST MONTH</option>
                        <option>LAST YEAR</option>
                    </select>
                    <ExportsPeriod exportsPeriod={this.state.selectedExportsOption} />
                </div>
                
                <div className='sales-container'>
                    <p>Total profit: 778576</p>
                    <p>SELECT A PERIOD:</p>
                    <select onChange={e => this.handleProfitOnChange(e)}>
                        <option>ALL TIME</option>
                        <option>LAST WEEK</option>
                        <option>LAST MONTH</option>
                        <option>LAST YEAR</option>
                    </select>
                    <ProfitPeriod profitPeriod={this.state.selectedProfitOption} />
                </div>
                
                
            </div>
        )
    }
}

export default RegionStatistics