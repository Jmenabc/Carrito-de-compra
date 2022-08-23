import React from 'react';
import Products from './Products';

const Shop = ({ products, addProductToCarrito }) => {
    return (
        <div>
            <h1>Tienda</h1>
            <Products
                products={products}
                addProductToCarrito={addProductToCarrito}
            />
        </div>
    );
}

export default Shop;