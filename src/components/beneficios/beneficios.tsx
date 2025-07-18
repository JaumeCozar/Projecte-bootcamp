import { Card } from 'flowbite-react';
import {
  HiOutlineChartSquareBar,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

interface Beneficio {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
}

const beneficios: Beneficio[] = [
  {
    icon: <HiOutlineChartSquareBar className="w-6 h-6 text-teal-600 dark:text-cyan-300 drop-shadow-lg" />,
    titulo: 'Visualización clara',
    descripcion:
      'Transformamos los datos de desperdicio en gráficos visuales que muestran claramente dónde y cómo estás perdiendo dinero.',
  },
  {
    icon: <HiOutlineCog className="w-6 h-6 text-green-600 dark:text-lime-300 drop-shadow-lg" />,
    titulo: 'Integración flexible',
    descripcion:
      'Nuestra plataforma se adapta a tu flujo de trabajo, ya sea mediante sensores, software o ambos. Tú decides cómo implementarlo.',
  },
  {
    icon: <HiOutlineRefresh className="w-6 h-6 text-blue-600 dark:text-sky-300 drop-shadow-lg" />,
    titulo: 'Optimización continua',
    descripcion:
      'Detectamos patrones de pérdida para ayudarte a mejorar procesos, ajustar compras y formar al personal en base a datos reales.',
  },
  {
    icon: <HiOutlineDocumentReport className="w-6 h-6 text-gray-700 dark:text-yellow-200 drop-shadow-lg" />,
    titulo: 'Datos accionables',
    descripcion:
      'Ofrecemos informes diarios por producto, día, ubicación o equipo. Datos útiles para tomar decisiones rápidas y sostenibles.',
  },
];

export function BeneficiosEffinity() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">¿Por qué elegir Effinity?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-start p-6 bg-white border border-gray-200 shadow-md rounded-2xl transition hover:shadow-lg hover:ring-1 hover:ring-teal-500 dark:bg-gray-900 dark:text-gray-100"
            >
              <div className="flex justify-center bg-gradient-to-tr from-teal-500 to-cyan-500 p-3 rounded-full shadow mb-4 animate-pulse-slow">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">{item.titulo}</h3>
              <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-300">{item.descripcion}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
