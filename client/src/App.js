import './App.css';
import { Header } from './components/Header/Header';
import { GlobalProvider } from './context/GlobalState';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

function App() {
  return (
    <AuthContextProvider>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </AuthContextProvider>
  );
}

export default App;
