import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <BrowserRouter > 
      <Header/>
      <main className="py-3">
        <Container>
          {/* We used routes using react-router-dom to render  a screen by
          passing it a page component */}
          <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='product/:id'element={<ProductScreen/>} />
          <Route path='cart/:id/:sort'element={<CartScreen/>} />
          <Route path='cart/:id'element={<CartScreen/>} />
          <Route path='cart'element={<CartScreen/>} />
          

        
          
          </Routes>
        </Container>
      </main>
      <Footer/>
      </BrowserRouter>

  )
}

export default App
