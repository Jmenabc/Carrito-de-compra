import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Carrito = ({carrito}) => {

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

const mapStateToProps = (status) => {
    return {
        carrito: status.carrito
    }
}

export default connect(mapStateToProps)(Carrito);