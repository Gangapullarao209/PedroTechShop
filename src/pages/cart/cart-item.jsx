import React,{useContext} from 'react'
import './cart.css'
import { ShopContext } from '../../context/shop-context'


export const  CartItem  = (props) => {
  
    const {id,productName, price, productImage} = props.data
    const{ cartItems,addToCart, removeFromCart,updateCartItemCount}=useContext(ShopContext)



  return (
    <div className='cartItem'>  
        
        <img alt='productimage' src={productImage}/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <span className="countHandler">
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} />
            <button onClick={()=>addToCart(id)}> + </button>
            </span>
        </div>
        
        {/* <div className="countHandler">

            <button>-</button>
            <input value={cartItems[id]}/>
            <button>+</button>

        </div> */}
        
        
    </div>
  )
}
