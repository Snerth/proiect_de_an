import React, { PureComponent } from 'react'
import RegionStatistics from '../RegionStatistics'
import CityStatistics from '../CityStatistics'
import '../../css/region.css'

class Germany extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showStatistics: true,
            region: 'GERMANY',
            showCityStatistics: false,
            showChishinauStatistics: false,
            city: '',
            numberOfStores: null
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:5000/regions/get/number_of_shops?country=Germany')
            .then(response => response.json())
            .then(data => data.data.reduce((acc, e) => acc + e))
            .then(data => this.setState({ numberOfStores: data }));
    }
    toggleShowStatistics = () => {
        this.setState({
            showStatistics: !this.state.showStatistics
        })
    }
    toggleShowCityStatistics = () => {
        this.setState({
            showCityStatistics: !this.state.showCityStatistics
        })
    }
    toggleShowBerlinStatistics = () => {
        this.setState({
            showBerlinStatistics: !this.state.showBerlinStatistics
        })
    }
    setCity = e => {
        console.log(e.target.value)
        this.setState({
            city: e.target.value
        })
    }
    render() {
        return (
            <div className='region-container'>
                <p className='country-name'>GERMANY</p>
                <p>Number of stores: {this.state.numberOfStores}</p>
                <div className='show-statistics-container'>
                    <p>SHOW STATISTICS:</p>
                    <button onClick={this.toggleShowStatistics}>{
                        this.state.showStatistics ? 'HIDE' : 'SHOW'
                    }</button>
                </div>
                <div>
                    {
                        this.state.showStatistics && <RegionStatistics region={this.state.region} />
                    }
                </div>
                <div className='select-city-container'>
                    <p>SELECT CITY:</p>
                    <button value='BERLIN' onClick={e => {
                        this.toggleShowBerlinStatistics()
                        this.setCity(e)
                        this.toggleShowCityStatistics()
                    }}>{
                        this.state.showBerlinStatistics ? 'HIDE' : 'BERLIN'
                    }</button>
                    <div>
                        {
                            this.state.showCityStatistics && <CityStatistics city={this.state.city}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Germany