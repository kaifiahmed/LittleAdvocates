import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import StartingPage from './components/startingPage';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/'
              element={<StartingPage/>}/>
          </Routes>
    `</BrowserRouter>
  
  );
}

export default App;
