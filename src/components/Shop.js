import React from 'react';
import Products from './Products';

const Shop = ({ addProductToCarrito }) => {
    return (
        <div>
            <h1>Tienda</h1>
            <Products
                addProductToCarrito={addProductToCarrito}
            />
        </div>
    );
}

export default Shop;