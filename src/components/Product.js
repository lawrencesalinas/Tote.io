import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const linkStyle = {
    textDecoration: 'none'
  }

//bootsrap margin and padding added
function Product({ product }) {
  // console.log(props)
  return (
    // margin and padding, used links  instead of hrefs so we dont render a page
    // instead render a component
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        {/* render product name and image */}
        <Card.Img  src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={linkStyle}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title> 
        </Link>

        <Card.Text as="div">
          <div className="my-3">
           
            {product.rating} from {product.numReviews}
            {/* render product props rating and number of reviews */}
            {/* props sent to Rating component  */}
            {/* render Rating component here */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
