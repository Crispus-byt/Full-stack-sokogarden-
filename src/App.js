import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom'
import Mpesapay from './components/Mpesapay';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
      <h1 className="text-warning">Sokogarden-Buy and sell online</h1>
      </header>

        <nav className='nav'>

          
        
          <Link className='btn btn-dark text-white m-3' to='/'>Get products</Link>
          <Link className='btn btn-dark text-white m-3' to='/addproducts'>Add products</Link>
          <Link className='btn btn-dark text-white m-3 ms-auto' to='signup'>SignUp</Link>

          <Link className='btn btn-dark text-white m-3 ' to='signin'>SignIn</Link>




        </nav>

        


      <Routes>


        <Route path='/pay' element={<Mpesapay/>} />
        <Route path='/addproducts' element={<AddProduct/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/' element={<GetProducts/>} />


      </Routes>







    </div>
    </Router>
  );
}

export default App;
