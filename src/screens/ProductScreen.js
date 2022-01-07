import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { useParams } from "react-router-dom";

function ProductScreen() {
  let idParam = useParams();
  // useParamms and find() was used to look for the product id
  const product = products.find((p) => {
    // console.log(p._id)
    // console.log("this is number", idParam.id)
    return p._id == idParam.id;
  });
  // console.log(product);

  return (
    <div>
      {/* #go back buttom */}
      <Link to="/" className="btn btn0ligh my-3">
        Go Back
      </Link>
      <Row>
          {/* created 1 row with 2 colums, 1 of the columns is 6 and the other is 3 and 3 */}
        <Col md={6}>
          {/* render product Image */}
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
            {/* ListGroup is used to have a customizable list with lines around the itemns */}
            {/* flush is used to remove some borders and rounded corners to render list group items */}
          <ListGroup variant = 'flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
            Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
            Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
