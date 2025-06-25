import { Card } from "flowbite-react";
import './card.css'
import testImage from '../img/test.jpg'

export function Carta() {
  return (
    <Card
      horizontal
      imgSrc={testImage}
      className="cartaComponente bg-white/30 backdrop-blur-xl border-none shadow-lg max-w-sm w-80"
    >
      <div className="p-4">
        <h5 className="text-3xl font-bold tracking-tight text-white mb-4">
          Transforma tus residuos en oportunidades
        </h5>
        <p className="text-white text-base leading-relaxed">
          En Effinity, ayudamos a las empresas a optimizar sus procesos y reducir pérdidas mediante el
          análisis inteligente de residuos.
          <br /><br />
          Recopilamos y procesamos datos sobre los alimentos o materias primas que se desechan durante la
          producción o distribución, y los transformamos en gráficos e informes claros y accionables.
          <br /><br />
          Nuestra plataforma te muestra exactamente dónde estás perdiendo dinero, por qué ocurre y qué
          acciones puedes tomar para mejorar la rentabilidad y la sostenibilidad de tu empresa.
        </p>
      </div>
    </Card>
  );
}
