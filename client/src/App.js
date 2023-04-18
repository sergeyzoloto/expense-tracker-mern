import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
