import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartingPage from './components/startingPage';
import GamePage from './components/gameSection';
import HomePage from './components/homepage';
import Header from './components/header';
import ShortsSection from "./components/shortsSection";
import CommunityPage from "./components/communitypage";
import Login from "./components/login"
import Navigation from './components/navigationBar/Navigation';
import Register from './components/register';



function App() {
  return (
    <BrowserRouter>
    
     <Header />
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/header" element={<Header />} />

        <Route path="/shorts" element={<ShortsSection />} /> 
        <Route path="/community" element={<CommunityPage />} />
        <Route path = "/loginpage" element={<Login/>} />
        <Route path = "/register" element={<Register/>} />

        </Routes>

      <Navigation/>
    </BrowserRouter>
  );
}

export default App;
