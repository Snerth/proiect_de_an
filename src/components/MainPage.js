import React, { PureComponent } from 'react'
import Header from './Header'
import Regions from './Regions'
import Moldova from './regions/Moldova'
import Poland from './regions/Poland'
import Germany from './regions/Germany'
import Ucraine from './regions/Ucraine'
import Romania from './regions/Romania'
import Shops from './Shops'
import '../css/mainPage.css'

class MainPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showMoldova: false,
            showRomania: false,
            showUcraine: false,
            showGermany: false,
            showPoland: false
        }
    }
    toggleShowMoldova = () => {
        this.setState({
            showMoldova: !this.state.showMoldova
        })
    }
    toggleShowRomania = () => {
        this.setState({
            showRomania: !this.state.showRomania
        })
    }
    toggleShowUcraine = () => {
        this.setState({
            showUcraine: !this.state.showUcraine
        })
    }
    toggleShowGermany = () => {
        this.setState({
            showGermany: !this.state.showGermany
        })
    }
    toggleShowPoland = () => {
        this.setState({
            showPoland: !this.state.showPoland
        })
    }
    render() {
        return (
            <div className='main'>
                <Header/>
                <div className='section'>
                    <Regions
                        toggleShowMoldova={this.toggleShowMoldova}
                        showMoldova={this.state.showMoldova}
                        toggleShowRomania={this.toggleShowRomania}
                        showRomania={this.state.showRomania}
                        toggleShowGermany={this.toggleShowGermany}
                        showGermany={this.state.showGermany}
                        toggleShowPoland={this.toggleShowPoland}
                        showPoland={this.state.showPoland}
                        toggleShowUcraine={this.toggleShowUcraine}
                        showUcraine={this.state.showUcraine}
                    />
                </div>
                <div className='section-countries'>
                    {
                        this.state.showMoldova && <Moldova toggleHide={this.toggleShowMoldova}/>
                    }
                    {
                        this.state.showUcraine && <Ucraine toggleHide={this.toggleShowUcraine}/>
                    }
                    {
                        this.state.showRomania && <Romania toggleHide={this.toggleShowRomania}/>
                    }
                    {
                        this.state.showGermany && <Germany toggleHide={this.toggleShowGermany}/>
                    }
                    {
                        this.state.showPoland && <Poland toggleHide={this.toggleShowPoland}/>
                    }
                </div>
                <div className='section'>
                    <Shops />
                </div>
            </div>
        )
    }
}

export default MainPage