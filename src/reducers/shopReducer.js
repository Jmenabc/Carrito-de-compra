const initialStatus = {
    products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product D' }
    ],

    carrito: []
}



//Reducer es el encargado de administrar el estado global de nuestra app (es una funcion)
const reducer = (status = initialStatus, action) => {
    switch (action.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            console.log('aaaaaa');
            break;
        default:
            return status;
    }
}



export default reducer;