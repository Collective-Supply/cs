import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import ShareLinks from "./pages/ShareLinks";
import Home from "./Home";
import Navbar from './components/navbar/Navbar';
import NavbarA from './components/navbar/NavbarA';

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/myprofile" element={<MyProfile />} /> 
            <Route exact path="/sharelinks" element={<ShareLinks />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;