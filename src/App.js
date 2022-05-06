import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Blogs/Blogs';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddItems from './Pages/Protected/AddItems/AddItems';
import MyItems from './Pages/Protected/MyItems/MyItems';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
