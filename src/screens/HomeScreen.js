import React, {useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import axios from "axios"

function HomeScreen() {
  const[products,setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts(){
      const { data } = await axios.get('/api/products')
      // console.log('I am data',data);
      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
{/* used map to iterate info products array imported from products */}
        {products.map((product) => {
          return (
            <Col key={product._id} sm={23} md={6} lg={4}>
                {/* pass products array to Product component */}
              <Product product = {product} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default HomeScreen;
