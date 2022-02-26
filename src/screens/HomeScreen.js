import React, {useEffect} from 'react'
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"
// useDispatch to call listproducts from productactions
import { useDispatch , useSelector} from 'react-redux' 
import { listProducts} from '../actions/productActions'

// useSelector let's use select parts of our state from our store

// call action listporducts
function HomeScreen() {
  const dispatch = useDispatch()
    // useDispatch  is to call the the products list
      //use useSelector to render products called  from the store
      // tell what part of state we want it to be in

      
  const productList = useSelector(state => state.productList)
  // useSelector is used to tell which part of state we want to get,
  // pulling from productlist from the store
  // productlist has many more objects and we can use object destructure
  // pull out error loading and products

  const {error, loading, products} = productList

  useEffect(() => {
    dispatch(listProducts())

  },[dispatch])

  // const products = []
  return (
    <div>
      <h1>Latest Products</h1>
      {/* if loading render  */}
      {loading ? <Loader/>
      
          : error? <Message variant='danger'>{error}</Message>
          :   <Row>
          {/* used map to iterate info products array imported from products */}
                  {products.map((product) => {
                    return (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          {/* pass products array to Product component */}
                        <Product product = {product} />
                      </Col>
                    )
                  })}
                </Row>
      }
    
    </div>
  )
}

export default HomeScreen;
