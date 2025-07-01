import React from "react";
import { Star } from "lucide-react";

export const RatingSection = () => {
  const stars = Array(5).fill(true);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Estrellas y rating */}
        <div className="flex justify-center items-center gap-1 mb-2">
          {stars.map((_, index) => (
            <span key={index} className="flex items-center justify-center bg-gradient-to-tr from-teal-500 to-cyan-500 p-1 rounded-full shadow animate-pulse-slow">
              <Star
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6 text-amber-400 drop-shadow-md"
              />
            </span>
          ))}
          <span className="text-gray-600 dark:text-gray-300 text-lg font-medium ml-3">
            4.9/5 basado en 350 empresas
          </span>
        </div>

        {/* Testimonio/resumen */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base italic max-w-xl mx-auto leading-relaxed">
          “El <span className="text-green-500 dark:text-lime-300 font-semibold">92%</span> de nuestros clientes reportaron una <span className="text-green-500 dark:text-lime-300 font-semibold">reducción significativa de pérdidas</span> en tan solo 3 meses, gracias a nuestros análisis inteligentes.”
        </p>
      </div>
    </section>
  );
};
