import { useState } from "react";
const questions = [
  {
    question: "¿Qué hace Lazy Loading?",
    options: [
      "Carga todas las imágenes de inmediato",
      "Carga imágenes solo cuando son visibles",
      "Reduce la calidad de las imágenes",
    ],
    answer: "Carga imágenes solo cuando son visibles",
  },
  {
    question: "¿Qué API de JavaScript se usa para Lazy Loading?",
    options: ["Fetch API", "Intersection Observer", "Canvas API"],
    answer: "Intersection Observer",
  },
  {
    question: "¿Qué API del navegador se utiliza para detectar cuándo una imagen entra en el viewport?",
    options: ["Fetch API", "Intersection Observer API", "Canvas API", "Geolocation API"],
    answer: "Intersection Observer API",
  },
  {
    question: "¿Cuál es el principal beneficio del Lazy Loading para el usuario?",
    options: [
      "Mejora la resolución de las fotos", 
      "Reduce el tiempo de carga inicial y el consumo de datos", 
      "Permite editar las imágenes en tiempo real", 
      "Cambia automáticamente el formato a PNG"
    ],
    answer: "Reduce el tiempo de carga inicial y el consumo de datos",
  },
  {
    question: "Si una imagen está en la cabecera (hero section), ¿es recomendable usar lazy loading?",
    options: [
      "Sí, siempre para ahorrar datos", 
      "No, porque retrasaría la visualización del contenido principal", 
      "Solo si la imagen es un GIF", 
      "Depende de si el usuario usa WiFi o datos"
    ],
    answer: "No, porque retrasaría la visualización del contenido principal",
  },
];
const TestEjercicio2 = () => {
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
      <h2 className="text-2xl font-bold mb-4">Test de Lazy Loading</h2>
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
        className="bg-green-500 textwhite px-6 py-2 mt-4 rounded"
      >
        Verificar respuestas
      </button>
    </div>
  );
};
export default TestEjercicio2;
