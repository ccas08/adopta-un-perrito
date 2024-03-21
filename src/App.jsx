import Header from './components/header';
import MyCard from './components/card';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import dogImage1 from './assets/dog1.jpg';
import dogImage2 from './assets/dog2.jpg';


function App() {
  // Datos de ejemplo para los perritos
  const dogs = [
    {
      id: 1,
      name: 'Fido',
      description: 'Amigable y juguetón',
      image: dogImage2,
    },
    {
      id: 2,
      name: 'Rex',
      description: 'Leal y protector',
      image: dogImage1,
    },
    // Añade más perritos según sea necesario
  ];

  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="d-flex flex-wrap justify-content-center">
        {/* Renderiza un MyCard para cada perrito en el arreglo */}
        {dogs.map(dog => (
          <MyCard key={dog.id} name={dog.name} description={dog.description} image={dog.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;


