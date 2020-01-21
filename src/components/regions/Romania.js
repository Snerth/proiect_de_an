import React, { PureComponent } from 'react'
import RegionStatistics from '../RegionStatistics'
import '../../css/region.css'
class Romania extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showStatistics: true,
            region: 'ROMANIA',
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
    render() {
        return (
            <div className='region-container'>
                <p>Romania</p>
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
                    <button>Bucharest</button>
                    <button>Cluj</button>
                </div>
            </div>
        )
    }
}

export default Romania