import LazyImage from "./LazyImage";
import TestEjercicio2 from "./TestEjercicio2";
const Ejercicio2 = () => {
  const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg"];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Ejercicio 2: Lazy Loading en Imágenes
      </h1>
      <p className="mb-4">
        Las siguientes imágenes solo se cargarán cuando sean visibles en la
        pantalla.
      </p>
      <p className="text-gray-500 mt-2">
        Haz scroll hacia abajo lentamente para ver cómo las imágenes se cargan
        solo cuando entran en el área visible.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt
        congue eros. Proin at ipsum tellus. Donec mattis nisi ut lectus rhoncus
        aliquam. Fusce egestas ultricies gravida. Sed placerat lorem turpis, in
        semper nunc tincidunt id. Maecenas mi dui, mollis sit amet elementum ut,
        mollis eu ligula. Fusce et bibendum dolor. Quisque vestibulum lobortis
        turpis, ac blandit nunc suscipit bibendum. Cras eget posuere dolor, vel
        dictum lectus. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean eu turpis ut justo mattis porta.
        Pellentesque ut feugiat mi. Duis metus nibh, vulputate sit amet mollis
        a, tincidunt ac nisi. Nulla eu ultricies diam. Proin pretium convallis
        varius. Integer molestie, lacus eu volutpat porta, tortor enim tristique
        nisi, a mattis mauris nunc a elit. Duis aliquet ut nunc ac venenatis.
        Etiam auctor, risus id molestie aliquet, metus justo sagittis augue,
        semper faucibus eros odio nec arcu. Aliquam in turpis metus. Proin
        egestas laoreet pharetra. Donec vulputate felis ac felis volutpat
        pulvinar. Aenean varius lectus quis congue lobortis. Curabitur aliquam
        viverra orci ac aliquam. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Etiam at ullamcorper nisi,
        vitae tempor tellus. Maecenas gravida ex in elit placerat, ac finibus
        erat tincidunt. Proin venenatis purus vitae nisl lobortis sollicitudin
        eget eget augue.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <p className="mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt
        congue eros. Proin at ipsum tellus. Donec mattis nisi ut lectus rhoncus
        aliquam. Fusce egestas ultricies gravida. Sed placerat lorem turpis, in
        semper nunc tincidunt id. Maecenas mi dui, mollis sit amet elementum ut,
        mollis eu ligula. Fusce et bibendum dolor. Quisque vestibulum lobortis
        turpis, ac blandit nunc suscipit bibendum. Cras eget posuere dolor, vel
        dictum lectus. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean eu turpis ut justo mattis porta.
        Pellentesque ut feugiat mi. Duis metus nibh, vulputate sit amet mollis
        a, tincidunt ac nisi. Nulla eu ultricies diam. Proin pretium convallis
        varius. Integer molestie, lacus eu volutpat porta, tortor enim tristique
        nisi, a mattis mauris nunc a elit. Duis aliquet ut nunc ac venenatis.
        Etiam auctor, risus id molestie aliquet, metus justo sagittis augue,
        semper faucibus eros odio nec arcu. Aliquam in turpis metus. Proin
        egestas laoreet pharetra. Donec vulputate felis ac felis volutpat
        pulvinar. Aenean varius lectus quis congue lobortis. Curabitur aliquam
        viverra orci ac aliquam. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Etiam at ullamcorper nisi,
        vitae tempor tellus. Maecenas gravida ex in elit placerat, ac finibus
        erat tincidunt. Proin venenatis purus vitae nisl lobortis sollicitudin
        eget eget augue.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <TestEjercicio2 />
    </div>
  );
};
export default Ejercicio2;
