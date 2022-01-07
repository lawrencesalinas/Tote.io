import React from "react"
import { Row, Col } from "react-bootstrap"
import products from "../products"
import Product from "../components/Product"

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
{/* used map to iterate info products array imported from products */}
        {products.map((product) => {
          return (
            <Col key={product._id} sm={23} md={6} lg={4}>
              <Product product = {product} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default HomeScreen;
