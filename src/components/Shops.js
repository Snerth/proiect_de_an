import React, { PureComponent } from 'react'
import '../css/shop.css'

class Shops extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            shops: [],
            sales: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/shops/get/shops')
            .then(data => data.json())
            .then(data => {
                console.log(data)
                console.log(data.sales)
                this.setState({shops: data.data,
                sales: data.sales})})
    }

    render() {
        return (
            <div>
                <p>SHOPS:</p>
                <div>
                {
                    this.state.shops.map(shop => {
                        let sumOfSales = 0
                        return(
                        <div className='shop'>
                            <p>{shop.name}</p>
                            <p>{shop.city}, {shop.country}</p>
                            <p>statistics:</p>
                            {
                                this.state.sales.map((sale,i,ar) => {
                                    if(shop.id == sale.stores_id){
                                        sumOfSales += sale.num_of_sales
                                    }
                                    if(this.state.sales.length-1 === i)
                                        return <p>Total sales: {sumOfSales}</p>
                                })
                            }
                        </div>
                    )})
                }
                </div>
                
            </div>
        )
    }
}

export default Shops



