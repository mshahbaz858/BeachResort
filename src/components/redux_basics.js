const redux = require('redux');
const createstore = redux.createstore;

const initialvalue = 0;
const Rootreducer = (state = initialvalue ,  action) => {
    if(action.type == 'Inc-counter'){
        return{
            ...state,
            Counter:state.counter + 1
        }
    }
    if(action.type == 'Add-counter'){
        return{
            ...state,
            Counter:state.counter + action.value
        };
    }
    return state;
    
}
const store =  createstore(Rootreducer);
console.log(store.getState());

store.dispatch({type: 'Inc-counter'});
store.dispatch({type: 'Add-counter',  value:10});   



