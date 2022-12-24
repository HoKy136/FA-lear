
export function ResetCount(number){
  return{
    type : 'RESET_COUNT'
  }
}
 export function INCRE(number){
      return {
          type:'INCRE',
          number
          
      }
  }
 export function DECRE(number){
      return {
          type:'DECRE',
          number
          
      }
  }

export function UpdateCart(payload){
  return {
      type:'UPDATE_CART',
      payload
  }
}

export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload 
    }
}


