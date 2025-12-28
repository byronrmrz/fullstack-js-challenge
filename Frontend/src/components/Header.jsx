
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="bg-white border-b-4 border-offy-blue shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-offy-blue rounded-lg flex items-center justify-center text-white font-bold">
            OM
          </div>
          <div>
            <h1 className="text-2xl font-bold text-offy-dark tracking-tight">
              Offymarket
            </h1>
            <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
              Backend Developer Test
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-offy-blue transition">Dashboard</a>
          <a href="#" className="hover:text-offy-blue transition">Reportes</a>
          <a href="#" className="text-offy-blue">Perfil</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;