import React, { PureComponent } from 'react'
import '../../css/region.css'
import RegionStatistics from '../RegionStatistics'
import CityStatistics from '../CityStatistics'

class Moldova extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showStatistics: true,
            region: 'MOLDOVA',
            showCityStatistics: true,
            showChishinauStatistics: true,
            showTiraspolStatistics: true,
            showOrheiStatistics: true,
            city: '',
            numberOfStores: null
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:5000/regions/get/number_of_shops?country=Moldova')
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
    toggleShowChishinauStatistics = () => {
        this.setState({
            showChishinauStatistics: !this.state.showChishinauStatistics
        })
    }
    toggleShowTiraspolStatistics = () => {
        this.setState({
            showTiraspolStatistics: !this.state.showTiraspolStatistics
        })
    }
    toggleShowOrheiStatistics = () => {
        this.setState({
            showOrheiStatistics: !this.state.showOrheiStatistics
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
                <p className='country-name'>MOLDOVA</p>
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
                    <button value='CHISHINAU' onClick={e => {
                        this.toggleShowChishinauStatistics()
                        this.setCity(e)
                        this.toggleShowCityStatistics()
                    }}>{
                        this.state.showChishinauStatistics ? 'HIDE' : 'CHISHINAU'
                    }</button>
                    <button value='TIRASPOL' onClick={e => {
                        this.toggleShowTiraspolStatistics()
                        this.setCity(e)
                        this.toggleShowCityStatistics()
                    }}>{
                        this.state.showTiraspolStatistics ? 'HIDE' : 'TIRASPOL'
                    }</button>
                    <button value='ORHEI' onClick={e => {
                        this.toggleShowOrheiStatistics()
                        this.setCity(e)
                        this.toggleShowCityStatistics()
                    }}>{
                        this.state.showOrheiStatistics ? 'HIDE' : 'ORHEI'
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

export default Moldova