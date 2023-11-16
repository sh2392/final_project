import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'
import {ProductContext, ProductListContext} from './components/ProductContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setIsLogin(true)
    }
  },[])

  return (
    <Router>
      <ProductListContext.Provider value={{products, setProducts}}>
        <ProductContext.Provider value={{selectedProduct, setSelectedProduct}}>
          <div className="App">
            <Navbar isLogin={isLogin} onSetIsLogin={setIsLogin}/>
            {
              isLogin ? <Main /> : <Login onSetIsLogin={setIsLogin}/>
            }
          </div>
        </ProductContext.Provider>
      </ProductListContext.Provider>
    </Router>

  );
}

export default App;
