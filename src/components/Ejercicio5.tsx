import Tutorial from "./tutorial/Tutorial";
import Test from "./tutorial/Test";

const Ejercicio5 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Sección del Tutorial e Interactividad */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <Tutorial />
        </section>

        {/* Sección del Test Final */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
          <div className="border-l-4 border-green-500 pl-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Evaluación Final</h2>
            <p className="text-gray-500">Demuestra lo aprendido en esta unidad.</p>
          </div>
          <Test />
        </section>
      </div>
    </div>
  );
};

export default Ejercicio5;