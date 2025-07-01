import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";
import "./checkout.css";
import { CheckoutButton } from "./CheckoutButton";

const PLANES = [
  {
    nombre: "básico",
    display: "Básico",
    precio: "€29/mes",
    descripcion: "Análisis básico de residuos, informes mensuales y soporte por email.",
  },
  {
    nombre: "profesional",
    display: "Profesional",
    precio: "€59/mes",
    descripcion: "Análisis avanzado, reportes personalizados, alertas en tiempo real y soporte prioritario.",
  },
  {
    nombre: "empresa",
    display: "Empresa",
    precio: "Contacta para precio",
    descripcion: "Soluciones a medida, integración con sistemas propios y consultoría dedicada.",
  },
];

const Checkout = () => {
  const { plan } = useParams<{ plan: string }>();
  const planInfo = PLANES.find((p) => p.nombre === plan);

  if (!planInfo) {
    return <div className="text-center py-20">Plan no encontrado.</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Comprar plan {planInfo.display}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <Card className="flex flex-col items-start p-6 bg-white border border-gray-200 shadow-md rounded-2xl transition hover:shadow-lg hover:ring-1 hover:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 mx-auto max-w-lg w-full">
            <div className="flex justify-center w-full mb-4">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-300">{planInfo.precio}</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">Beneficios incluidos</h3>
            <ul className="text-lg text-gray-600 leading-relaxed dark:text-gray-300 mb-6 w-full">
              {planInfo.descripcion.split(',').map((beneficio, idx) => (
                <li key={idx} className="mb-2 last:mb-0 text-left">{beneficio.trim()}</li>
              ))}
            </ul>
            {planInfo.nombre === "empresa" ? (
              <a
                href="/contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl text-xl shadow-lg transition-all duration-200 flex justify-center items-center w-full text-center mt-4"
              >
                Contactar para contratar
              </a>
            ) : (
              <div className="flex justify-center mt-4 w-full">
                <CheckoutButton plan={planInfo.nombre} />
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
