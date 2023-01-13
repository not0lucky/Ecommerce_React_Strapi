import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  amount: 0,
  totalPrice:0,
  cartItems:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,{payload}) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload.id);
      if( !itemInCart){
        state.cartItems.push(payload)
        state.totalPrice = 0 


       for (var i = 0; i < state.cartItems.length; i++){
        state.totalPrice += state.cartItems[i].price 
      }

             
      }
      
    },
    del: (state,{payload}) => {
       state.cartItems = state.cartItems.filter(({id})=> id!=payload)
       state.totalPrice = 0 
       for (var i = 0; i < state.cartItems.length; i++){
        state.totalPrice += state.cartItems[i].price 
      }
    },
    clear:(state) =>{
        state.cartItems = [];
    },
    tot:(state)=>{
        return state.cartItems.length();
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { add, del, clear,tot } = cartSlice.actions

export default cartSlice.reducer