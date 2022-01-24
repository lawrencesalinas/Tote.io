import React, {useEffect} from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message  from '../components/Message';
import { addToCart  } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux'
;


function CartScreen({}) {
    const location = useLocation()
    const {id} = useParams()
    const productId = id
    // we need to get the quantity from our url, if it exist do .split which turn it to an array
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    console.log('qty', qty);
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log('cartItems', cartItems);

  useEffect(()=> {
        // make sure its dependent on productId
        // dispatch update our state and add items to local storage
      if(productId){
          dispatch(addToCart(productId, qty))
      }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
      console.log('remove', id )
  }

  return (
  <Row>
      <Col md={8}>
          <h1>Shopping Cart</h1>
          {/* if cart is empty */}
          {cartItems.length === 0 ? (
              <Message variant='info'>
                  Your cart is empty <Link to='/'>Go Back</Link>
              </Message>
            // else if not empty we create are list group
          ): (
              // map throught cartItems
              <ListGroup variant ='flush'>
                  {cartItems.map(item => {
                      //lopp react requires key 
                   return   <ListGroup.Item key={item.product}>
                          <Row>
                              <Col md={2}>
                                  <Image src={item.image} alt ={item.name} fluid rounded/>
                                  </Col>
                                  <Col md={3}>
                                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                                  </Col>
                                  <Col md={2}>
                                      ${item.price}
                                  </Col>
                                  <Col md={3}>
                                  <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                        > 
                          {
                            //array constructor to create array of that stock
                            // created an array everytime we change the state or qty
                            [...Array(item.countInStock).keys()].map((x) => {
                             return  <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>;
                            })
                          }
                        </Form.Control>
                                  </Col>
                                  <Col md={1}>
                                      <Button 
                                      type='button'
                                      variant='light'
                                      onClick={() => removeFromCartHandler(item.product)}
                                      >
                                          <i className='fas fa-trash'></i>
                                          
                                      </Button>

                                  </Col>
                          </Row>
                      </ListGroup.Item>
                  })}
              </ListGroup>
          )}
      </Col>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item> 
                    {/* total the items */}
                    <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0  )}) items</h2>
                    <h2>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} items</h2>
                </ListGroup.Item>
                <Button 
                type="button"
                className='btn-block'
                disabled={cartItems.length === 0}>
                    Proceed to Checkout

                </Button>
            </ListGroup>
        </Card>
      <Col md={4}>

      </Col>
  </Row>
  )
}

export default CartScreen;
