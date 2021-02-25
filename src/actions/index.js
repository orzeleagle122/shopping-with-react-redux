export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAN_CART = 'CLEAN_CART';
export const GET_TOTALS='GET_TOTALS';
export const TOOGLE_AMOUNT='TOOGLE_AMOUNT';

export const removeItem=(id)=>{
    return {
        type:REMOVE,
        payload:{
            id
        }
    }
}

export const decrease=(id,amount)=>{
    return {
        type: DECREASE,
        payload:{
            id,
            amount
        }
    }
}