import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar o componente Routes
import MenuBar from './Components/navbar/MenuBar';
import Highlight from './Components/importantEvent/highlight';
import SearchBar from './Components/pesquisa/pesquisa';
import Login from './Components/login/login';
import Cadastro from './Components/cadastro/cadastro';
import HomePage from './Components/home/home';
import HomeBar from './Components/home/homeBar';

function App() {
  return (
    <div className='App'>
       {window.location.pathname !== '/home' && <MenuBar />}
      <Routes>
        <Route path='/' element={
          <>
            <header className='App-header'>
            <Highlight />
            <SearchBar />
            </header>
          </>
        } />

       <Route path='/login' element={
          <>
          <Login />
          </>
        } />

       <Route path='/Cadastro' element={
          <>
          <Cadastro />
          </>
        } />

        <Route path='/home' element={
          <>
          <HomeBar />
          <HomePage />
          </>
        } />

      </Routes>
    </div>
  );
}

export default App;
