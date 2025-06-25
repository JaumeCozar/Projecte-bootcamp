import { Card } from "flowbite-react";
import { FaChartLine, FaRecycle, FaLightbulb } from "react-icons/fa";

export const Servicios = () => {
  const servicios = [
    {
      titulo: "Análisis de Desperdicios",
      descripcion: "Identificamos puntos críticos donde se generan pérdidas en tus procesos.",
      icono: <FaRecycle className="text-green-600 text-4xl" />,
    },
    {
      titulo: "Visualización de Datos",
      descripcion: "Transformamos los datos en gráficos claros y accionables para decisiones rápidas.",
      icono: <FaChartLine className="text-blue-600 text-4xl" />,
    },
    {
      titulo: "Recomendaciones Inteligentes",
      descripcion: "Te damos sugerencias prácticas para reducir pérdidas y mejorar la eficiencia.",
      icono: <FaLightbulb className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-gray-800" id="services-section">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 text-lg">
          Te ayudamos a transformar tus datos de residuos en decisiones efectivas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              {servicio.icono}
              <h3 className="text-xl font-semibold">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
