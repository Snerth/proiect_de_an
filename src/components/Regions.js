import React, { PureComponent } from 'react'
import '../css/selectRegion.css'

class Regions extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='select-region-container'>
                <p>SELECT A REGION</p>
                <div className='buttons-container'>
                    <button onClick={this.props.toggleShowMoldova}>{
                        this.props.showMoldova ? 'HIDE' : 'MOLDOVA'
                    }</button>
                    <button onClick={this.props.toggleShowRomania}>{
                        this.props.showRomania ? 'HIDE' : 'ROMANIA'
                    }</button>
                    <button onClick={this.props.toggleShowUcraine}>{
                        this.props.showUcraine ? 'HIDE' : 'UCRAINE'
                    }</button>
                    <button onClick={this.props.toggleShowGermany}>{
                        this.props.showGermany ? 'HIDE' : 'GERMANY'
                    }</button>
                    <button onClick={this.props.toggleShowPoland}>{
                        this.props.showPoland ? 'HIDE' : 'POLAND'
                    }</button>
                </div>
            </div>
        )
    }
}

export default Regions