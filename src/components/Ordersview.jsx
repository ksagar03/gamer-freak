import React from 'react'
import moment from 'moment'
import CartProducts from './CartProducts'
import Currency from './Currency'
const Ordersview = ({order}) => {
  return (
    <div>
      <p><b>Ordered Date:</b> {moment.unix(order.data.created).format("MMM Do YYYY, h:ma")} <br/> <small>Your OrderID : {order.id}</small> </p>
      {order.data.Cart.map((item) => (
        <CartProducts
        id={item.id}
        image={item.image}
        price={item.price}
        title={item.title}
        ratings={item.ratings}
        hidebutton// if this key word is called then the button will be hidden this is keyword is defined 
        // inside the cartproduct.jsx
        />
      ))}
      <p className='d-flex flex-row' style={{gap: "4px"}}> Order Total:  {<Currency price_value={order.data.amount/100}/>}</p>
      <hr />
      
    </div>
   
  )
}

export default Ordersview
