import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk'
// three principals of redux.
// 1st single store(Single Source of truth(global state))
// 2nd immutable updates(state readonly)
// 3rd reducer should be pure(no side effects)

//action name constant
const init = 'init';
const increment = 'increment';
const decrement = 'decrement';
const incrementByAmount = 'incrementByAmount';

//store
const store = createStore(reducer, applyMiddleware(logger.default,thunk.default))
const history = [];

//reducer
function reducer (state={amount:1}, action) {
    // if (action.type===increment){
    //     //return state.amount += 1;
    //     //immutability: below it is a copy,and we should not mutate the previous state, due to that we can't access the history
    //     return {amount: state.amount+1}
    // }
    // if (action.type===decrement){
    //     //return state.amount += 1;
    //     //immutability: below it is a copy,and we should not mutate the previous state, due to that we can't access the history
    //     return {amount: state.amount-1}
    // }
    // if (action.type===incrementByAmount){
    //     //return state.amount += 1;
    //     //immutability: below it is a copy,and we should not mutate the previous state, due to that we can't access the history
    //     return {amount: state.amount+action.payload}
    // }
    switch(action.type){
        case init:
            return{amount:action.payload}
        case increment:
            return {amount:state.amount+1}
        case decrement:
            return {amount:state.amount-1}
        case incrementByAmount:
            return {amount:state.amount+action.apyload}
    }
    return state;
}

//async aPI call
async function getUser(){
    const {data} = await axios.get(`http://localhost:3000/account/1`);
    console.log(data)
 }
 //getUser();
// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history)
// })

//action creator

async function initUser(dispatch,getState){
    const {data} = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch({'type':init,'payload':data.amount})
}
// this will bring a error because redux takes only syncronous actions
function incremenF(){
    return {type:increment}
}

function decrementF(){
    return {type:decrement}
}

function incrementByAmountF(value){
    return {type:incrementByAmount,payload:value}
}
// Still there is a problem in which you can make spelling mistakes, to avoid it make names const.
//gloabl state
setInterval(() => {
    store.dispatch(initUser)
}, 2000);



//action
//{type:'increment'} //it is nt a part of reduc but a convention that this kind of thing we need to send to change.

// install npm i -g json-server
// that is a fake server