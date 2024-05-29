import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar o componente Routes
import MenuBar from './Components/navbar/MenuBar';
import Highlight from './Components/importantEvent/highlight';
import SearchBar from './Components/pesquisa/pesquisa';
import Login from './Components/login/login';
import Cadastro from './Components/cadastro/cadastro';
import HomeBar from './Components/home/homeBar';
import Suporte from './Components/suporte/suporte';
import SuporteBar from './Components/suporte/suporteBar';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <>
          <MenuBar />
            <header className='App-header'>
            <Highlight />
            <SearchBar />
            </header>
          </>
        } />

        <Route path='/login' element={
          <>
          <MenuBar />
          <Login />
          </>
        } />

       <Route path='/Cadastro' element={
          <>
          <MenuBar />
          <Cadastro />
          </>
        } />

        <Route path='/home' element={
          <div className='fundo'>
            <HomeBar />
            <Highlight />
            <SearchBar />
          </div>
        } />

        <Route path='/suporte' element={
          <>
            <SuporteBar />
            <Suporte />
          </>
        } />

      </Routes>
    </div>
  );
}

export default App;
