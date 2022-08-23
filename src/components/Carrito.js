import React, { useState } from 'react';
import styled from 'styled-components';

const Carrito = () => {
    const [carrito, changeCarrito] = useState([
        { id: 1, cuantity: 2, name: 'Product 1' },
        { id: 2, cuantity: 1, name: 'Product 2' },
        { id: 3, cuantity: 5, name: 'Product 3' },
    ]);

    return (
        <div>
            <h3>Carrito</h3>
            {
                carrito.length > 0 ?
                    carrito.map((products, index) => {
                        return (
                            <Product key={index}>
                                <Name>
                                    {products.name}
                                </Name>
                                Cantidad: {products.cuantity}
                            </Product>
                        );
                    })
                    :
                    <p>Aun no has agregado productos al carrito</p>
            }
        </div>
    );
}
const Name = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;
const Product = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;



export default Carrito;