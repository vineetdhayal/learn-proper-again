export const addToCart = (data: any) => {
    return {
        type: 'ADD_TO_CART',
        data
    }
}


export const removeToCart = (data: any) => {
    return {
        type: 'REMOVE_TO_CART',
        data
    }
}
