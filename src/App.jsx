import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Collections from "./pages/Collections";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ShoppingCart from "./components/ShoppingCart";
import UserProfile from "./components/UserProfile";
import DesktopNavigation from "./router/DesktopNavigation";
import MobileNavigation from "./router/MobileNavigation";

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <DesktopNavigation></DesktopNavigation>
        <MobileNavigation></MobileNavigation>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="collections" element={<Collections/>}/>
          <Route path="men" element={<Men/>}/>
          <Route path="women" element={<Women/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<ShoppingCart/>} />
          <Route path="user" element={<UserProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
