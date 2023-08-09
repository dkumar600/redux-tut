import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart,numberOfItemsp,numberOfItemsN } from './redux/ProductSlicer';

function App() {
  const product = useSelector(state => state.carts.items);
  const cart = useSelector(state => state.carts.cartList);
  const NoItems = useSelector(state => state.carts.cartNItems);
  const totalCost = useSelector(state => state.carts.TotalPrice)
  const totalQunatity = useSelector(state => state.carts.TotalQuantity);
  const addToCartText = useSelector(state => state.carts.addtoCartText);
   //console.log(NoItems)
  const dispatch = useDispatch();
  return (
    <>
    <div style={{display:'flex'}}>
    <div style={{display:'flex',flexWrap:'wrap', width:'75vw', height:'100vh',border:'1px solid grey'}}>
    {product.map((elem)=>(
      <div key={elem.id} style={{height:'120px', width:'120px',border:'1px solid grey',margin:'2px'}}>
      <div style={{textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{elem.title}</div>
      <div>${elem.price}</div>
      <button onClick={()=>dispatch(addtoCart(elem))}>{addToCartText?.[elem.id]===undefined?'Add to Cart':addToCartText[elem.id]}</button>
      </div>
    ))}
    </div>
    <div style={{display:'flex', flexDirection:'column', width:'25vw',border:'1px solid grey',flexWrap:'wrap'}}><div style={{display:'flex',alignItems:'space-between', width:'20vw'}}><h3> Cart Items : {totalQunatity}</h3><h3> Total Cost : {totalCost.toFixed(2)}</h3></div> 
    {cart.map((elem)=>(
        
        <div key={elem.id} style={{height:'120px', width:'25vw',border:'1px solid grey',margin:'2px'}}>
        <div style={{textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{elem.title}</div>
        <div>${elem.price}</div>
        <div style={{display:'flex', alignItems: 'center'}}>
        <button onClick={()=> dispatch(numberOfItemsp(elem))}>+</button><div style={{display:'flex', alignItems: 'center',justifyContent:'center',height:'30px', width:'30px',border:'1px solid grey',margin:'2px'}}>{NoItems.map((item)=>{
          if(item.id === elem.id) return item.NoItems
        })}</div><button onClick={()=> dispatch(numberOfItemsN(elem))}>-</button>
        </div>
         </div>
      ))}
    </div>
    <div>
      
    </div>
    </div>
    </>
  )
}

export default App




