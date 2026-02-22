const FigmaComponent = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Diseño Exportado de Figma</h2>
      <p className="text-gray-600">
        Este componente fue diseñado en Figma y convertido en React.
      </p>
      <div className="px-5 py-2.5 bg-pink-300 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5">
        <div className="justify-start text-neutral-700 text-xs font-bold font-['Inter']">
          Diseño con Figma
        </div>
      </div>
      <img
        src="img/figma-design.png"
        alt="Exportado de Figma"
        className="mt-4 mx-auto w-40"
      />
    </div>
  );
};
export default FigmaComponent;
