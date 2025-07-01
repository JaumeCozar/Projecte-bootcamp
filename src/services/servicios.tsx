import { Card } from "flowbite-react";
import { FaChartLine, FaRecycle, FaLightbulb } from "react-icons/fa";

export const Servicios = () => {
  const servicios = [
    {
      titulo: "Análisis de Desperdicios",
      descripcion: "Identificamos puntos críticos donde se generan pérdidas en tus procesos.",
      icono: <FaRecycle className="text-green-600 dark:text-lime-300 text-4xl drop-shadow-lg" />,
    },
    {
      titulo: "Visualización de Datos",
      descripcion: "Transformamos los datos en gráficos claros y accionables para decisiones rápidas.",
      icono: <FaChartLine className="text-blue-600 dark:text-cyan-300 text-4xl drop-shadow-lg" />,
    },
    {
      titulo: "Recomendaciones Inteligentes",
      descripcion: "Te damos sugerencias prácticas para reducir pérdidas y mejorar la eficiencia.",
      icono: <FaLightbulb className="text-yellow-500 dark:text-yellow-200 text-4xl drop-shadow-lg" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100" id="services-section">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Nuestros Servicios</h2>
        <p className="text-gray-600 text-lg dark:text-gray-300">
          Te ayudamos a transformar tus datos de residuos en decisiones efectivas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-900 dark:text-gray-100"
          >
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              {servicio.icono}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{servicio.titulo}</h3>
              <p className="text-gray-600 dark:text-gray-300">{servicio.descripcion}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
