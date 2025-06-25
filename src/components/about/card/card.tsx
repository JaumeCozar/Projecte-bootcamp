import { Card } from "flowbite-react";
import './card.css'
import testImage from '../img/planta.png'

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
        <p className="text-lg text-center text-gray-300 mb-6">
          En <strong>Effinity</strong>, convertimos tus residuos en valor.
        </p>

        <p className="text-base text-slate-200 leading-relaxed text-center sm:text-left">
          Analizamos <strong>dónde</strong>, <strong>cómo</strong> y <strong>por qué</strong> pierdes materias primas o alimentos, y te entregamos <em>insights</em> claros para:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-base sm:text-left text-center sm:text-justify">
          <li><strong>Optimizar</strong> tus procesos</li>
          <li><strong>Reducir</strong> pérdidas</li>
          <li><strong>Aumentar</strong> la rentabilidad</li>
          <li><strong>Mejorar</strong> la sostenibilidad de tu empresa</li>
        </ul>
      </div>
    </Card>
  );
}
