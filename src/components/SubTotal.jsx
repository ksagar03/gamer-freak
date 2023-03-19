import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';

const SubTotal = () => {
    const [{Cart}, dispactch]=useStateValue();
  return (
    <div className='card text-white bg-warning '>
    <div className="card-body">
       <CurrencyFormat
       renderText={(value)=>(
        <>
        <h5>
            Subtotal ({Cart?.length} items): {value} 
        </h5>
</>
      )}
      decimalScale={2}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₹"}


      />
    </div>
    </div>
  )
}

export default SubTotal
