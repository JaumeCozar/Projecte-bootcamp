// backgroundVideo.tsx
import './backgroundVideo.css';
import videoSource from '../../../video/videoFood.mp4';
import { Carta } from '../../about/card/card'; // importa la carta

export const BackgroundVideoComponent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      {/* 🟨 Superposición de la carta */}
      <div className="absolute inset-0 flex items-center justify-center z-20 p-4">
        <Carta />
      </div>

      {/* 🟦 Si deseas, puedes agregar un overlay semitransparente */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};
