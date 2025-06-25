import React from 'react';
import { Card } from 'flowbite-react';
import { FaChartLine, FaMoneyBillWave, FaRecycle } from 'react-icons/fa';

type InfoCard = {
  icon: React.ReactNode;
  title: string;
  description: string;  
};

const data: InfoCard[] = [
  {
    icon: <FaChartLine className="text-3xl text-teal-600" />,
    title: 'Visualiza tus pérdidas ocultas',
    description:
      'Detectamos y visualizamos el desperdicio de materias primas o alimentos. Te mostramos con gráficos dónde estás perdiendo dinero y cómo actuar.',
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-green-600" />,
    title: 'Optimiza tus recursos',
    description:
      'Empresas como la tuya pierden miles de euros al año. Con nuestra herramienta puedes reducir ese desperdicio y mejorar tu rentabilidad.',
  },
  {
    icon: <FaRecycle className="text-3xl text-blue-600" />,
    title: 'Cumple objetivos y normativas',
    description:
      'Te ayudamos a cumplir con la Ley 7/2022 de Economía Circular y avanzar hacia una operación más sostenible y legalmente alineada.',
  },
];

const DesperdicioInfo: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Reduce tus pérdidas</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {data.map((item, index) => (
          <Card key={index} className="text-center shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h5 className="text-xl font-semibold text-gray-800">{item.title}</h5>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DesperdicioInfo;
