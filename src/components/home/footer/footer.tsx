import { Footer, FooterCopyright, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";

export function FooterComponente() {
  return (
    <Footer container className="rounded-none">
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        {/* <FooterLink href="#">About</FooterLink> */}
        <Link to="/privacidad" className="text-cyan-600 hover:underline">
          Privacy Policy
        </Link>
        <Link to="/contacto" className="text-cyan-600 hover:underline ml-4">
          Contact
        </Link>
      </FooterLinkGroup>
    </Footer>
  );
}