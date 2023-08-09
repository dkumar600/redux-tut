//import redux from 'redux';
// const createStore = redux.createStore;
// const bindActionCreators = redux.bindActionCreators
// const  CAKE_ORDERED = 'CAKE_ORDERED'
// const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

// function restockedCake(qty=1){
//     return{
//         type:CAKE_RESTOCKED,
//         payload:qty
//     }
// }
// function orderCAKE(){
//     return {
//     type:CAKE_ORDERED,
//     quantity:1
// }
// }

// const initialState = {
//     numOfCakes:10,
// }
// //(previousState, action) => newState

// const reducer = (state = initialState, action) =>{
//     switch(action.type){
//         case CAKE_ORDERED:
//             return{
//                 ...state,
//                 numOfCakes : state.numOfCakes -1,
//             }
//         case CAKE_RESTOCKED:
//             return{
//                 ...state,
//                 numOfCakes:state.numOfCakes + action.payload,
//             }
//         default:
//             return state
//     }
// } 

// const store = createStore(reducer)
// console.log('initial State', store.getState());
// const unsubscribe=store.subscribe(()=> console.log('update state ', store.getState()))

// // store.dispatch(orderCAKE())
// // store.dispatch(orderCAKE())
// // store.dispatch(orderCAKE())
// // store.dispatch(restockedCake(3))

// const actions = bindActionCreators({orderCAKE,restockedCake}, store.dispatch)
// actions.orderCAKE();
// actions.orderCAKE();
// actions.orderCAKE();
// actions.restockedCake(3);

// unsubscribe()

import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './ProductSlicer'
export const store = configureStore({
    reducer:{
        carts: cartReducer
    },
})