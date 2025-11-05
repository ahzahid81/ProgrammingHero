import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products: {products.length}</h3>
            <table>
                <thead>
                    <th>No.</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </thead>
                <tbody>{
                        products.map((product, index) =>
                        <tr><td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.name}</td></tr>
                        )
                    }</tbody>
            </table>    
        </div>
    );
};

export default ProductTable;