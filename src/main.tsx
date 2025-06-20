import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {NavBarra} from './App.tsx'
import { NavBarra1 } from './components/home/navBar/navBar.tsx'
//import { FooterComponente } from './components/home/footer/footer.tsx'
import { BackgroundVideoComponent } from './components/home/backgroundVideo/backgroundVideo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <NavBarra1/>
    <BackgroundVideoComponent/>
    
  </StrictMode>,
)

/*<NavBarra />
<FooterComponente/>*/