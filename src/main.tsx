import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {NavBarra} from './App.tsx'
import { NavBarra1 } from './components/home/navBar/navBar.tsx'
//import { FooterComponente } from './components/home/footer/footer.tsx'
import { BackgroundVideoComponent } from './components/home/backgroundVideo/backgroundVideo.tsx'
//import { Carta } from './components/about/card/card.tsx'
import { FormularioContacto } from './components/contact/form/form.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FooterComponente } from './components/home/footer/footer.tsx'
import DesperdicioInfo from './components/desperdicio/desperdicio.tsx'
import { BeneficiosEffinity } from './components/beneficios/beneficios'
import { ToggleText } from './components/faq/faq.tsx'
import { RatingSection } from './components/rating/rating'
import { Servicios } from './services/servicios'
import { Pricing } from './pricing/pricing'
import Checkout from './components/checkout/checkout'
import EmpresaContacto from './components/contact-pay/EmpresaContacto'
import { PoliticaPrivacidad } from './components/privacidad/politicaprivacidad'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <BrowserRouter>
     <NavBarra1 />
      <Routes>
        <Route path="/" element={
          <>
            <BackgroundVideoComponent/>
            <DesperdicioInfo />
            <BeneficiosEffinity />
            <Servicios />
            <Pricing />
            <ToggleText />
            <RatingSection />
          </>
        } />
        <Route path="/comprar/:plan" element={<Checkout />} />
        <Route path="/empresa-contacto" element={<EmpresaContacto />} />
        <Route path="/contacto" element={<FormularioContacto />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
      <FooterComponente />
    </BrowserRouter>
  </StrictMode>,
)

/*<NavBarra />
<FooterComponente/>*/