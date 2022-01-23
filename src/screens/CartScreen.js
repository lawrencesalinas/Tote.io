import React, {useEffect} from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { second } from '../components/Message';
import { addToCart  } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen({}) {
    const location = useLocation()
    const {id} = useParams()
    const productId = id
    // we need to get the quantity from our url, if it exist do .split which turn it to an array
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    // console.log('qty', qty);
  const dispacth = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log('cartItems', cartItems);

  useEffect(()=> {
        // make sure its dependent on productId
        // dispatch update our state and add items to local storage
      if(productId){
          dispacth(addToCart(productId, qty))
      }
  }, [dispacth, productId, qty])

  return (
  <div>
      Cart
  </div>
  )
}

export default CartScreen;
