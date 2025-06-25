import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {NavBarra} from './App.tsx'
import { NavBarra1 } from './components/home/navBar/navBar.tsx'
//import { FooterComponente } from './components/home/footer/footer.tsx'
import { BackgroundVideoComponent } from './components/home/backgroundVideo/backgroundVideo.tsx'
//import { Carta } from './components/about/card/card.tsx'
import { FormularioContacto } from './components/contact/form/form.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FooterComponente } from './components/home/footer/footer.tsx'
import DesperdicioInfo from './components/desperdicio/desperdicio.tsx'
import { BeneficiosEffinity } from './components/beneficios/beneficios'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    
    <NavBarra1 />
    
    <BackgroundVideoComponent/>
    <FormularioContacto />
    <DesperdicioInfo />
    <BeneficiosEffinity />
    </BrowserRouter>
    <FooterComponente />

    

  </StrictMode>,
  
)

/*<NavBarra />
<FooterComponente/>*/