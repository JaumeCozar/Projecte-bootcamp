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
    <section className="checkout-section">
      <Card className="checkout-card">
        <div className="checkout-header">
          <h2 className="checkout-title">Comprar plan {planInfo.display}</h2>
        </div>
        <p className="checkout-price">{planInfo.precio}</p>
        <div className="checkout-benefits">
          <span className="checkout-benefits-title">¡Beneficios incluidos en este plan!</span>
          <ul className="checkout-benefits-list">
            {planInfo.descripcion.split(',').map((beneficio, idx) => (
              <li key={idx} className="checkout-benefit-item">{beneficio.trim()}</li>
            ))}
          </ul>
        </div>
        {planInfo.nombre === "empresa" ? (
          <a
            href="/empresa-contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl text-xl shadow-lg transition-all duration-200 flex justify-center items-center w-full text-center checkout-btn"
          >
            Contactar para contratar
          </a>
        ) : (
          <div className="flex justify-center mt-4">
            <CheckoutButton plan={planInfo.nombre} />
          </div>
        )}
      </Card>
    </section>
  );
};

export default Checkout;
