import React, {useEffect} from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message  from '../components/Message';
import { addToCart, removeFromCart  } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux'
;


function CartScreen({}) {
    const navigate = useNavigate()
    const location = useLocation()
    const {id} = useParams()
    const productId = id
    // we need to get the quantity from our url, if it exist do .split which turn it to an array
                                                    // split creates qty = ['qty', '1(quantity)' ], we only want the number which is index 1
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    console.log('qty', qty);  
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log('cartItems', cartItems);

  useEffect(()=> {
        // dependent on product id, fire of addtocart action 
        // make sure its dependent on productId
        
        // dispatch update our state and add items to local storage
      if(productId){
          dispatch(addToCart(productId, qty))
      }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
      // if logged in, redirect to shipping
      navigate('/login?redirect=shipping')
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
                                                                    {/* fluid makes the image responsive */}
                                  <Image src={item.image} alt ={item.name} fluid rounded/>
                                  </Col>
                                  <Col md={3}>
                                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                                  </Col>
                                  <Col md={2}>
                                      ${item.price}
                                  </Col>
                                  <Col md={3}>
                                  <Form.Select
                         
                          value={item.qty}
                                            // dispatch action add to cart when we change quantity on the cart screen
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
                        </Form.Select>
                                  </Col>
                                  {/* remove cart */}
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
                    {/* add accumulator + item quantity starting from 0 */}
                    <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0  )}) items</h2>
                     {/* total the price multiplying price and quantity */}
                    {/* add accumulator + item quantity starting from 0, toFixed max decimal places to the right */}
                    <h2>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} items</h2>
                </ListGroup.Item>
                <Button 
                type="button"
                className='btn-block'
                onClick={checkoutHandler}
                // if cartItems is empty
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
