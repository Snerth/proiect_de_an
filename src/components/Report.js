import React, { PureComponent } from 'react'
import ReportItem from './ReportItem'
import ReportExportedItem from './ReportExportedItem'
import '../css/report.css'

class Report extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            addPurchasedItem: true,
            addExportedItem: true,
            listOfItems: [],
            selectedItem: '',
            date: '',
            selectedExportedItem: '',
            dateExported: '',
            quantity: '',
            quantityExp: ''
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:5000/items/get/items')
            .then(data => data.json())
            .then(data => this.setState({listOfItems: data.data}))
    }
    handleQuantity = e => {
        this.setState({quantity: e.target.value})
    }
    handleExportedQuantity = e => {
        this.setState({quantityExp: e.target.value})
    }
    handleDateChange = e => {
        this.setState({date: e.target.value})
    }
    handleSelect = e => {
        let r, i, store
        r = e.target.value.split(" | ")
        i = r[0]
        store = r[1]
        fetch(`http://127.0.0.1:5000/items/get/item_id?store=${store}&item=${i}`)
            .then(data => data.json())
            .then(data => this.setState({selectedItem: data.data[0]}))
        // this.setState({selectedItem: e.target.value.split(" | ")})
    }
    cancelAddPurchased = () => {
        this.setState({selectedItem: '', date: '', quantity: ''})
    }
    handleExportedDateChange = e => {
        this.setState({dateExported: e.target.value})
    }
    handleExportedSelect = e => {
        
        this.setState({selectedExportedItem: e.target.value.split(" | ")})
    }
    cancelAddExported = () => {
        this.setState({selectedExportedItem: '', dateExported: '', quantityExp: ''})
    }
    toggleAddPurchasedItem = () => {
        this.setState({
            addPurchasedItem: !this.state.addPurchasedItem
        })
    }
    toggleAddExportedItem = () => {
        this.setState({
            addExportedItem: !this.state.addExportedItem
        })
    }
    addPurchase = () => {
        console.log('adding purchase')
        fetch(`http://127.0.0.1:5000/add/purchase`,{
method: 'POST',
mode: 'cors',
cache: 'no-cache',
headers: {'Content-Type':'application/json'},
redirect: 'follow',
referrer: 'no-referrer',
body: JSON.stringify({
"date": this.state.date,
"selectedItem": this.state.selectedItem,
"quantity": this.state.quantity
})
}).then(data => data.json().then(data => {
console.log(data)
}))
    }
    render() {
        console.log(this.state)
        return (
            <div className='report-container'>
                <div className='report-header'>
                    <p>REPORT</p>
                </div>
                <div className='report-body'>
                    <div className='report-form'>
                        
                        <div className='purchased-items'>
                            <p className='add-item'>ADD PURCHASED ITEMS</p>
                            <button 
                                className='add' 
                                onClick={
                                    () => {
                                        this.toggleAddPurchasedItem()
                                        this.cancelAddPurchased()
                                    }
                                }>{
                                this.state.addPurchasedItem ? 'CANCEL' : 'ADD ITEM'
                            }</button>
                            {
                                this.state.addPurchasedItem &&
                                    <ReportItem 
                                        listOfItems={this.state.listOfItems} 
                                        toggleAdd={this.toggleAddPurchasedItem}
                                        selectedItem={this.state.selectedItem}
                                        date={this.state.date}
                                        handleDateChange={this.handleDateChange}
                                        handleSelect={this.handleSelect}
                                        handleQuantity={this.handleQuantity}
                                        addPurchase={this.addPurchase}
                                    />
                            }
                        </div>
                        <div className='exported-items'>
                            <p className='add-item'>ADD EXPORTED ITEMS</p>
                            <button className='add' onClick={this.toggleAddExportedItem}>{
                                this.state.addExportedItem ? 'CANCEL' : 'ADD ITEM'
                            }</button>
                            {
                                this.state.addExportedItem && 
                                    <ReportExportedItem 
                                        listOfItems={this.state.listOfItems} 
                                        toggleAdd={this.toggleAddExportedItem}
                                        selectedExportedItem={this.state.selectedExportedItem}
                                        dateExported={this.state.dateExported}
                                        cancelAddExported={this.state.cancelAddExported}
                                        handleExportedDateChange={this.handleExportedDateChange}
                                        handleExportedSelect={this.handleExportedSelect}
                                        handleExportedQuantity={this.handleExportedQuantity}
                                    />
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Report