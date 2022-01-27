import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';
import Inicio from './pages/Inicio';
import Error from './pages/Error';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (<>




    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="/detalhes/:id" element={<Detalhes />} />

        <Route path="*" element={<Error />} />

      </Routes>

    </Router>


    <ToastContainer autoClose={3000} />



  </>

  );
}

export default App;
