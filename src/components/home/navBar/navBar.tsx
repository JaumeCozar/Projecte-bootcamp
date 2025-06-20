import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavBarra1(){
    return (
      <div className = "NavBarra1 sticky top-0 z-50">
        <Navbar fluid rounded className="bg-black/20 dark:bg-gray-500/0">
          <NavbarBrand href="#">
            <img
              src="/logoBanner.png"
              className="mr-3 h-10 sm:h-12 ml-10"
              alt="Flowbite React Logo"
            />
          
          </NavbarBrand>
          <div className="flex md:order-2">
            
  
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink href="#" className="">About</NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
}