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
import AddItem from './Pages/AddItem/AddItem';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import ManageItems from './Pages/ManageItems/ManageItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/manageitems'element={<ManageItems></ManageItems>}></Route>
        <Route path='/additem'element={<AddItem></AddItem>}></Route>
        <Route path='/myitems'element={<Myitems></Myitems>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='/inventory/:ItemID'element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
