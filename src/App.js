import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import ShareLinks from "./pages/ShareLinks";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/profile" element={<MyProfile />} /> 
            <Route exact path="/shareLinks" element={<ShareLinks />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
