import React, { useState } from "react";
import type { KeyboardEvent } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

// Tus datos internos

const toggleItems = [
  {
    title: "¿Qué es Effinity?",
    content:
      "Effinity es una plataforma en la que analizamos dónde, cómo y por qué pierdes materias primas o alimentos",
  },
  {
    title: "¿Que tipo de negocios son los mas beneficiados con Effinity?",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    title: "¿Cuanto puedo ahorrar usando Effinity?",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    title: "¿Es dificil usar Effinity?",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    title: "¿Cuanto es el costo de implementar Effinity?",
    content: "Lorem ipsum dolor sit amet",
  },
];

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
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-white shadow-inner animate-fade-in">
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
