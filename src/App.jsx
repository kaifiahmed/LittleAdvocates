import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartingPage from './components/startingPage';
import GamePage from './components/gameSection';
import HomePage from './components/homepage';
import Header from './components/header';
import Footer from './components/footer';
import ShortsSection from "./components/shortsSection";


function App() {
  return (
    <BrowserRouter>
    
     <Header />
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/shorts" element={<ShortsSection />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
