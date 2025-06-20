import './backgroundVideo.css'; // Archivo CSS para estilos
import videoSource from '../../../video/videoFood.mp4'; // Asegúrate de tener el video en tu proyecto

export const BackgroundVideoComponent = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>
    </div>
  );
};