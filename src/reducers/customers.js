import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMERS, UPDATE_CUSTOMERS, DELETE_CUSTOMERS } from './../constants/index';


export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMERS]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMERS]: (state, action) => {
         const customerPayload = action.payload;
         const { id } = customerPayload; // id= 2 name: 'nuevo nombre'
        // [ { id: 1, name: '', ... },
        //   { id: 2, name: 'viejo nombre', ... }, 
       //    { id: 3, name: '', ... }]

       const customers = state;
       const initialValue = [];
       // Primera Iteracion
       // acc = []
       // { id: 1, name: '', ... }
       // [ { id: 1, name: '', ... } ]

       //Segunda Iteracion
       // acc = [ { id: 1, name: '', ... } ]
       // { id: 2, name: 'viejo nombre', ... }
       //  { id: 2, name: 'viejo nombre', ... } =>  { id: 2, name: 'nuevo nombre', ... }
       // [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... } ]

       //Tercera Iteracion
       // acc =  [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... } ]
       // { id: 3, name: '', ... }
       // [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... }, { id: 3, name: '', ... } ]
       const newCustomers = customers.reduce((acc, customer) => {
           if (customer.id === id) {
               return[...acc, customerPayload];
           }else{
               return [...acc, customer]
           }
       }, initialValue)
       
       return newCustomers;
    },
    [DELETE_CUSTOMERS]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);


