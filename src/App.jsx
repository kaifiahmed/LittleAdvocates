import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import StartingPage from './components/startingPage';
import GamePage from './components/gameSection ';



function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/'
              element={<StartingPage/>}/>
             <Route  path='/game'
                element={<GamePage/>}/>
          </Routes>
     </BrowserRouter>
  
  );
}

export default App;
