const initialState = {
  data: [],
  Carts: [],
  calcuPrice : 0 
};

export  function ReduxProduct(state = initialState, action) {
  switch (action.type) {
    

    case "API_CALL_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
      case "ADD_TO_CART": 
      const { product, quantity } = action.payload;
      product.quantity = quantity
      if(state.Carts.length === 0 ){
        return {
          ...state,
          Carts: [...state.Carts, product]
        }
      }
      else {
            let check = false;
            state.Carts.map((item, key) => {
              if (item.productId === product.productId) {
                alert('Items is already in the cart')
                check = true;
              }
            });
            if (!check) {
              return {
                ...state,
                Carts: [...state.Carts, product]
              }
            }
          }
    case 'INCRE':
      const proCheckoutInc = action.payload.proCheckoutInc
      
      return {
        ...state,
        Carts: state.Carts.map(item => 
          item.productId === proCheckoutInc.productId ? { ...item, quantity: proCheckoutInc.quantity + 1 } : item)
      }
      
    case 'DECRE':
      const proCheckoutDec = action.payload.proCheckoutDec
      return {
        ...state,
        Carts: state.Carts.map(item => 
          item.productId === proCheckoutDec.productId ? { ...item, quantity: proCheckoutDec.quantity - 1 } : item)
      }

        case 'DELETE_CART':
        return{
        ...state,
        Carts:state.Carts.filter(item=>{
            return item.productId !== action.payload.productId
        })
}
case "CLEAR_CART":
  return{
    ...state,
    Carts: []
  }


  
    // case GET_NUMBER_CART:
    //   return {
    //     ...state,
    //   };

    // case ADD_CART:
    //   if (state.numberCart === 0) {
    //     let cart = {
    //       id: action.payload.productId,
    //       quantity: state.count,
    //       name: action.payload.productName,
    //       image: action.payload.imageUrl,
    //       price: action.payload.price,
    //       description : action.payload.description,
    //       totalPrice : action.payload.price * state.count 
    //     };
    //     state.Carts.push(cart);
    //   } else {
    //     let check = false;
    //     state.Carts.map((item, key) => {
    //       if (item.id === action.payload.productId) {
    //         state.Carts[key].quantity++;
    //         check = true;
    //       }
    //     });
    //     if (!check) {
    //       let _cart = {
    //         id: action.payload.productId,
    //       quantity: state.count,
    //       name: action.payload.productName,
    //       image: action.payload.imageUrl,
    //       price: action.payload.price,
    //       description : action.payload.description,
    //       totalPrice : action.payload.price * state.count 
    //       };
    //       state.Carts.push(_cart);
    //     }
    //   }
    //   return {
    //     ...state,
    //     numberCart: state.numberCart + 1,
    //   };
      
    default:
      return state;
  }
}

