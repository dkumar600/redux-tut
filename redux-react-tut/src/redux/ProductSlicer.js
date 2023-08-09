import { createSlice } from "@reduxjs/toolkit";
import productData from './productdData'

const initialState = {
    cartList : [],
    items : productData,
    TotalPrice:0,
    TotalQuantity:0,
    cartNItems:[],
    addtoCartText:{}
}

export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addtoCart : (state,action) => {
            let status = false
            for(let i=0;i<state.cartList.length;i++){
                if(state.cartList[i].id===action.payload.id){
                    status=true
                    state.TotalQuantity-=state.cartNItems[i]['NoItems'];
                    state.TotalPrice-=state.cartNItems[i]['price'];
                    state.cartList.splice(i,1);
                    state.cartNItems.splice(i,1);
                    delete state.addtoCartText[action.payload.id];
                    break;
                }
            }
            if(!status || status === undefined){
                state.cartList.push(action.payload)
                let ob = {id:action.payload.id, NoItems:1, price:action.payload.price,status:'Remove From Cart'};
                state.cartNItems.push(ob);
                state.TotalQuantity+=1
                state.TotalPrice+=action.payload.price;
                state.addtoCartText[action.payload.id] = 'Remove From Card'
            }
        },
        numberOfItemsp: (state, action) =>{
            for(let i=0;i<state.cartNItems.length;i++){
                if(action.payload.id===state.cartNItems[i].id){
                    state.cartNItems[i]['NoItems']+=1;
                    state.TotalQuantity+=1
                    state.TotalPrice+=action.payload.price
                    state.cartNItems[i]['price'] = state.cartNItems[i]['NoItems']*action.payload.price

                }
            }
        },
        numberOfItemsN: (state,action) => {
            for(let i=0;i<state.cartNItems.length;i++){
                if(action.payload.id===state.cartNItems[i].id){
                    state.cartNItems[i]['NoItems']-=1;
                    state.TotalQuantity-=1
                    state.TotalPrice-=action.payload.price
                    state.cartNItems[i]['price'] = state.cartNItems[i]['NoItems']*action.payload.price
                    if(state.cartNItems[i]['NoItems']==0){
                        state.cartList.splice(i,1);
                        state.cartNItems.splice(i,1);
                    }

                }
            }
        }
    }

    
})

export const {addtoCart,numberOfItemsp,numberOfItemsN} = cartSlice.actions

export default cartSlice.reducer;