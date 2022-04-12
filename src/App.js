import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Login from './Pages/Login/Login'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
