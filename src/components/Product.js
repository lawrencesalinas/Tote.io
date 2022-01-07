import React from "react";
import { Card } from "react-bootstrap";

//bootsrap margin and padding added
function Product(props) {
  // console.log(props)
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${props.product._id}`}>
        <h3>{props.product.name}</h3>
        <Card.Img src={props.product.image} />
      </a>

      <Card.Body>
        <a href={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            {props.product.rating} from {props.product.numReviews}
            <Rating value ={props.product.rating} text = {`${props.product.numReviews} reviews`} color={'#f8e825'}
          </div>
        </Card.Text>

        <Card.Text as="h3">{props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;
