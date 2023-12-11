import './App.css';
import { Home, Detail } from './pages';
import { Routes, Route } from "react-router-dom";





function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/details' element={<Detail />} />
         
      </Routes>
      
    </>
  );
}

export default App;
