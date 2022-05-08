import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Myitems from './Pages/Myitems/Myitems';
import Register from './Pages/Register/Register';
import ItemDetail from './Pages/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/myitems'element={<Myitems></Myitems>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='/inventory/:ItemID'element={<ItemDetail></ItemDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
