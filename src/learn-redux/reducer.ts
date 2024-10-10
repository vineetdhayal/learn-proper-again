const initialValue = [{ name: 'android' }, { name: 'apple' }];

export const cartData = (data: any = initialValue, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...data, action.data]
        case 'REMOVE_TO_CART':
            return data ? data.splice(1) : data
        default:
            return data;
    }
}
