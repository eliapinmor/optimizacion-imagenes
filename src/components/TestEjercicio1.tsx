import { useState } from "react";
const questions = [
  {
    question: "¿Cuál de estos formatos soporta transparencia?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Qué formato es más eficiente en la web?",
    options: ["PNG", "JPEG", "WebP", "AVIF"],
    answer: "AVIF",
  },
  {
    question:
      "¿Qué formato es el más adecuado para logotipos con colores planos y bordes definidos?",
    options: ["JPEG", "SVG", "AVIF", "TIFF"],
    answer: "SVG",
  },
  {
    question:
      "¿Cuál es el límite máximo de colores que puede manejar el formato GIF?",
    options: ["256", "16.7 millones", "65.536", "1024"],
    answer: "256",
  },
  {
    question: "¿Qué significa que un formato de imagen sea 'Lossless'?",
    options: [
      "Que pierde calidad al guardar",
      "Que no pierde información al comprimir",
      "Que solo sirve para la web",
      "Que no admite metadatos",
    ],
    answer: "Que no pierde información al comprimir",
  },
  {
    question:
      "¿Cuál es el formato estándar para fotografías digitales en cámaras y teléfonos debido a su compatibilidad universal?",
    options: ["RAW", "JPEG", "PNG", "WebP"],
    answer: "JPEG",
  },
  {
    question:
      "¿Qué formato fue desarrollado por Google como alternativa eficiente a JPEG y PNG?",
    options: ["AVIF", "HEIC", "WebP", "SVG"],
    answer: "WebP",
  },
  {
    question:
      "¿Qué ventaja principal ofrece SVG sobre los formatos de mapa de bits (raster)?",
    options: [
      "Mejor manejo de fotografías reales",
      "No pierde calidad al reescalarse",
      "Soporta millones de colores",
      "Es más fácil de editar en Photoshop",
    ],
    answer: "No pierde calidad al reescalarse",
  },
  {
    question:
      "¿Qué extensión de archivo se asocia comúnmente con imágenes de alta calidad utilizadas principalmente en impresión profesional?",
    options: ["TIFF", "WebP", "GIF", "BMP"],
    answer: "TIFF",
  },
  {
    question:
      "¿Qué formato permite crear animaciones sencillas sin necesidad de vídeo?",
    options: ["JPEG", "PNG", "GIF", "SVG"],
    answer: "GIF",
  },
];
const TestEjercicio1 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questions.length).fill(""),
  );
  const handleSelect = (index: number, option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };
  const checkAnswers = () => {
    const correct = selectedAnswers.filter(
      (ans, i) => ans === questions[i].answer,
    ).length;
    alert(`Has respondido correctamente ${correct} de
${questions.length}`);
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test de Conocimientos</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`mr-2 px-4 py-2 mt-2 rounded ${
                selectedAnswers[i] === opt
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleSelect(i, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="bg-green-500 textwhite px-6 py-2 mt-4 rounded text-white"
      >
        Verificar respuestas
      </button>
    </div>
  );
};
export default TestEjercicio1;
