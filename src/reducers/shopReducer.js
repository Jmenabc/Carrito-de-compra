const initialStatus = {
    products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product D' }
    ],

    carrito: []
}




const reducer = (status = initialStatus, action) => {
    return status;
}

export default reducer;