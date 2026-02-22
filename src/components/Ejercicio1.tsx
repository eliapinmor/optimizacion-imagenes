import ImageOptimizer from "./ImageOptimizer";
import TestEjercicio1 from "./TestEjercicio1";
const Ejercicio1 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Ejercicio 1: Optimización de Imágenes
      </h1>
      <p className="mb-4">
        Suba una imagen y conviértala a diferentes formatos. Luego, compare los
        tamaños de archivo.
      </p>
      <ImageOptimizer />
      <h2 className="text-2xl font-bold mb-4">Ejercicio 1B: Test teórico sobre el formato de las imagenes</h2>
      <p className="mb-4">
        Responda las siguientes preguntas para evaluar su comprensión sobre los
        formatos de imagen.
      </p>
      <TestEjercicio1 />
    </div>
  );
};
export default Ejercicio1;
