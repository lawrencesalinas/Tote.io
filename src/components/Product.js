import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from 'react-router-dom'

//bootsrap margin and padding added
function Product(props) {
  // console.log(props)
  return (
    <Card className="my-3 p-3 rounded">
      <Link href={`/product/${props.product._id}`}>
        <h3>{props.product.name}</h3>
        <Card.Img src={props.product.image} />
      </Link>

      <Card.Body>
        <Link href={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            {props.product.rating} from {props.product.numReviews}
            <Rating value ={props.product.rating} text = {`${props.product.numReviews} reviews`} color={'#f8e825'}/>
          </div>
        </Card.Text>

        <Card.Text as="h3">{props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;
