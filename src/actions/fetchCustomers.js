import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from 'redux-actions';

const customers = [
    {
      dni: "1234",
      name: "Fred Garcia",
      age: 25
    },
    {
      dni: "5678",
      name: "Stef Garcia",
      age: 27
    },
    {
      dni: "9012",
      name: "Toby Kawasaki",
      age: 27
    }
  ];
  
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);