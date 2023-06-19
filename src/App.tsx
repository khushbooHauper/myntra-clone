import React from 'react';
import './App.scss';
import { Link ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import LinkPage from './pages/Link';


function App() {
  return (
    <div className="App">
     

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/:title' element={<LinkPage/>}/>
     </Routes>
    </div>
  );
}

export default App;



