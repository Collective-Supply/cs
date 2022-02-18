import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import ShareLinks from "./pages/ShareLinks";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import SharedLinks from "./components/SharedLinks"

function App() {
  return (
      <>
        <h1>Collective Supply</h1>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/profile" component={MyProfile} />
            <Route path="/shareLinks" component={ShareLinks} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Routes>
        </Router>

        <LoginButton />
        <LogoutButton />
        <Profile />
        <SharedLinks />
      </>
  );
}

export default App;
