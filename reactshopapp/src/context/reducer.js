// export const cartReducer = (state, action) => {
//     switch (action.type) {
//       case "ADD_TO_CART":
//         return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
//       case "REMOVE_FROM_CART":
//         return {
//           ...state,
//           cart: state.cart.filter((c) => c.id !== action.payload.id),
//         };
//       case "CHANGE_CART_QTY":
//         return {
//           ...state,
//           cart: state.cart.filter((c) =>
//             c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
//           ),
//         };
//       default:
//         return state;
//     }
//   };
export const cardReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, {...action.payload, qty:1}]};
            case "REMOVE_CART":
                return {...state, cart:state.cart.filter((c)=> c.id !==action.payload.id)}
            case "CHANGE_QTYINC":
                return {
                    ...state, cart:state.cart.filter((c)=> c.id === action.payload.id ? (c.qty = action.payload.qty+1):c.qty)
                }
            case "CHANGE_QTYDC":
                {
                    return {
                        ...state, cart:state.cart.filter((c)=> c.id === action.payload.id ? (c.qty = action.payload.qty-1): c.qty)
                    }
                }
            default:
                return state;
    }
}