import './App.css'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
//import { politicaprivacidad } from './components/privacidad/politicaprivacidad';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PoliticaPrivacidad } from './components/privacidad/politicaprivacidad';

export function NavBarra() {
  return (
    <Navbar fluid>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

function App() {
  return (
    <Router>
      <NavBarra />
      <Routes>
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </Router>
  );
}

export default App;
