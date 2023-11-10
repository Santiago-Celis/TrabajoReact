import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SeriesPage from './views/Series/SeriesPage';
import MoviesPage from './views/Movies/MoviesPage';
import HomePage from './views/Home/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Series' element={<SeriesPage/>} />
          <Route path='/Movies' element={<MoviesPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
