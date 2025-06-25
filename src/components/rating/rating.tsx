import React from "react";
import { Star } from "lucide-react";

export const RatingSection = () => {
  const stars = Array(5).fill(true);

  return (
    <div className="rating-section text-center mt-12 px-4">
      {/* Estrellas y rating */}
      <div className="flex justify-center items-center gap-1 text-amber-400">
        {stars.map((_, index) => (
          <Star
            key={index}
            fill="currentColor"
            stroke="currentColor"
            className="w-6 h-6 drop-shadow-md"
          />
        ))}
        <span className="text-slate-400 text-lg font-medium ml-3">
          4.9/5 basado en 350 empresas
        </span>
      </div>

      {/* Testimonio/resumen */}
      <p className="mt-4 text-slate-400 text-sm sm:text-base italic max-w-xl mx-auto leading-relaxed">
        “El <span className="text-green-400 font-semibold">92%</span> de nuestros clientes reportaron una <span className="text-green-400 font-semibold">reducción significativa de pérdidas</span> en tan solo 3 meses, gracias a nuestros análisis inteligentes.”
      </p>
    </div>
  );
};
