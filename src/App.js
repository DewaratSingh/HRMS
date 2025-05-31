import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home  from './pages/Home';
import  Register  from './pages/Register';
import  Login  from './pages/Login';
import News from './pages/News';
import Post from './pages/Post';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/news' element={<News/>}/> 
      <Route path='/newsPost/:slug' element={<Post/>}/> 
    </Routes>
    </BrowserRouter>
    </>
      

  )
}

export default App;
