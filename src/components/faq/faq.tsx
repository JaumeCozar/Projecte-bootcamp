import React, { useState } from "react";
import type { KeyboardEvent } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

// Tus datos internos

const toggleItems = [
  {
    title: "¿Qué es Effinity?",
    content:
      "Effinity es una plataforma inteligente basada en IA que ayuda a las empresas del sector alimentario a detectar, analizar y reducir el desperdicio de materias primas y alimentos. Recopilamos datos del proceso productivo y te ofrecemos informes visuales y recomendaciones para optimizar operaciones y ahorrar recursos.",
  },
  {
    title: "¿Qué tipo de negocios son los más beneficiados con Effinity?",
    content:
      "Effinity está diseñado principalmente para cocinas industriales, restaurantes, hoteles, comedores colectivos, supermercados y empresas de procesamiento de alimentos. Cualquier negocio que maneje grandes volúmenes de productos perecederos puede beneficiarse enormemente de su implementación.",
  },
  {
    title: "¿Cuánto puedo ahorrar usando Effinity?",
    content:
      "Nuestros clientes pueden ahorrar hasta un 60% del desperdicio alimentario comestible. Esto se traduce en ahorros económicos directos, mayor eficiencia operativa y una mejora significativa en la sostenibilidad del negocio.",
  },
  {
    title: "¿Es difícil usar Effinity?",
    content:
      "No. Effinity está diseñado para ser intuitivo y fácil de usar. Nuestro sistema se adapta a tus procesos y no requiere conocimientos técnicos avanzados. Además, ofrecemos capacitación y soporte para asegurar una integración fluida.",
  },
  {
    title: "¿Cuál es el costo de implementar Effinity?",
    content:
      "El costo depende del tamaño de tu operación y del nivel de personalización requerido. Ofrecemos planes flexibles según tus necesidades, con una relación costo-beneficio altamente rentable gracias al ahorro que genera la reducción de desperdicios. Contáctanos para una cotización sin compromiso.",
  }
]
;

// Subcomponente que representa una sola entrada
const ToggleItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`max-w-md mx-auto mt-4 transition-all duration-300 ${
        isOpen ? "shadow-2xl ring-2 ring-teal-400" : "shadow-md"
      } rounded-2xl focus-within:ring-2 focus-within:ring-blue-400`}
    >
      <div
        className={`cursor-pointer flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 select-none outline-none text-lg font-semibold dark:text-white text-gray-900 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800 dark:hover:text-white hover:px-6 hover:border-blue-700 dark:hover:border-blue-800 ${
          isOpen ? "border-teal-400 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900" : ""
        }`}
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-label={title}
      >
        <HiOutlineQuestionMarkCircle className="w-6 h-6 text-teal-500 dark:text-cyan-300 flex-shrink-0" />
        <span className="flex-1">{title}</span>
        <span
          className={`text-2xl font-bold transform transition-transform duration-300 dark:text-white ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-b-2xl text-gray-700 dark:text-white shadow-inner animate-fade-in">
          {content}
        </div>
      </div>
    </div>
  );
};

// Componente contenedor
export const ToggleText: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Preguntas Frecuentes (FAQ)</h2>
        <div className="space-y-4">
          {toggleItems.map((item, index) => (
            <ToggleItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  );
};
