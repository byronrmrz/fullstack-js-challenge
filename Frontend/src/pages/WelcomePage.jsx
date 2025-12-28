import Header from '../components/Header';
import Footer from '../components/Footer';

const WelcomePage = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex flex-col bg-offy-light">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-offy-dark mb-6">
            Bienvenido al Portal de <span className="text-offy-blue">Reportes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Esta aplicación permite visualizar y filtrar la cantidad de posts de los usuarios
            en tiempo real.
          </p>
          
          <button 
            onClick={onEnter}
            className="bg-offy-blue hover:bg-blue-500 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Ingresar al Sistema
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WelcomePage;