import React from 'react'
import { Card } from 'react-bootstrap'


function Product(props) {
    return (
        <Card className = 'my-3 p-3 rounded'>
            <h3>{props.product.name}</h3>
        </Card>

    )
}

export default Product
