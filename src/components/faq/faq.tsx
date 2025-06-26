import React, { useState } from "react";

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

  return (
    <div className="max-w-md mx-auto mt-4">
      <div
        className="cursor-pointer text-black px-4 py-2 rounded-md shadow hover:bg-blue-600 hover:text-white transition flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span className="text-lg font-bold">{isOpen ? "×" : "+"}</span>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-gray-100 rounded-md text-gray-700 shadow-inner">
          {content}
        </div>
      </div>
    </div>
  );
};

// Componente contenedor
export const ToggleText: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center text-black text-2xl italic">
          <p>Preguntas Frecuentes (FAQ)</p>
        </div>
        <div className="p-8 max-w-2xl mx-auto space-y-4">
          {toggleItems.map((item, index) => (
            <ToggleItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </>
  );
};
