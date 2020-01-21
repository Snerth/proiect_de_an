import React, { PureComponent } from 'react'
import RegionStatistics from '../RegionStatistics'
import CityStatistics from '../CityStatistics'
import '../../css/region.css'
class Poland extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showStatistics: true,
            region: 'POLAND',
            showCityStatistics: false,
            showWarszawaStatistics: false,
            city: '',
            numberOfStores: null
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:5000/regions/get/number_of_shops?country=Romania')
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
    toggleShowWarszawaStatistics = () => {
        this.setState({
            showWarszawaStatistics: !this.state.showWarszawaStatistics
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
                <p>Poland</p>
                <p>Number of stores: {this.state.numberOfStores}</p>
                <div>
                    <p>Show the statistics of this region</p>
                    <button onClick={this.toggleShowStatistics}>{
                        this.state.showStatistics ? 'HIDE' : 'SHOW'
                    }</button>
                </div>
                <div>
                    {
                        this.state.showStatistics && <RegionStatistics region={this.state.region} />
                    }
                </div>
                <div>
                    <p>Select the city</p>
                    <button value='WARSZAWA' onClick={e => {
                        this.toggleShowWarszawaStatistics()
                        this.setCity(e)
                        this.toggleShowCityStatistics()
                    }}>{
                        this.state.showWarszawaStatistics ? 'HIDE' : 'WARSZAWA'
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

export default Poland