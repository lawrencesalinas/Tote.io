import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup, 
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector} from 'react-redux'
import Rating from "../components/Rating";
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useParams } from "react-router-dom";
import { listProductDetails } from '../actions/productActions'

function ProductScreen() {
  let {id} = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => {
    return state.productDetails
  })
  
  const {loading, error, product} = productDetails
   
    useEffect(() => {
      dispatch(listProductDetails(id))
  }, [] )
 

  return (
    <div>
      {/* #go back buttom */}
      <Link to="/" className="btn btn0ligh my-3">
        Go Back
      </Link>
      {loading ?
      <Loader/>
      : error
      ? <Message variant='danger'>{error}</Message>
      :(
        <Row>
        {/* created 1 row with 2 colums, 1 of the columns is 6 and the other is 3 and 3 */}
        <Col md={6}>
          {/* render product Image on first column */}
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          {/* ListGroup is used to have a customizable list with lines around the itemns */}
          {/* flush is used to remove some borders and rounded corners to render list group items */}
          {/* 2nd column*/}
          <ListGroup variant="flush">
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
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        {/* 3rd column, here rendered are the prices product count */}
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {/* created two rows and two columns inside the column to render price and stock  */}
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {/* render if count is in stock, if countInStock is > 1 render in stock else it's out of stock */}
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroupItem>
                  {/* disabled is used from ListGroup, it makes the button unclickable if condition is met */}
                <Button
                  className="btn-block"
                  disabled={product.countInStock == 0}
                  type="button"
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )
      }
   
    </div>
  );
}

export default ProductScreen;
