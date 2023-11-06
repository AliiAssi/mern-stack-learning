import { Routes, Route, Navigate } from 'react-router-dom'
import ChatBox from './pages/chatBox'
import Register from './pages/Register'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from './components/NavBar';
import './index.css'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <ChatContextProvider user={user}>
    <NavBar></NavBar>
    <br /><br /><br />
      <Container>
        <Routes>
          <Route path='/' element={user? <ChatBox /> : <Login/>} ></Route>
          <Route path='/login' element={user? <ChatBox /> : <Login/>} ></Route>
          <Route path='/register' element={user? <ChatBox /> : <Register/>} ></Route>
          <Route path='*' element={<Navigate to='/' />} ></Route>
        </Routes>
      </Container>
      </ChatContextProvider>
    </>
  )
}

export default App
