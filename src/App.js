import { Container } from 'react-bootstrap'

import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  return (
    <div >
      <Header/>
      <main>
        <Container>
        <h1>Welcome to my Store</h1>
        </Container>
      </main>
      <Footer/>

    </div>
  )
}

export default App;
