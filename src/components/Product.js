import React from 'react'
import { Card } from 'react-bootstrap'

//bootsrap margin and padding added
function Product(props) {
    return (
        
        <Card className = 'my-3 p-3 rounded'>
            <a href ={`/product/${props.product._id}`}></a>
            <h3>{props.product.name}</h3>
            <Card.Img src = {props.product.image}/>
        </Card>

    )
}

export default Product
