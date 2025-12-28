import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getUsers } from '../services/api'; 

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Efecto para cargar datos iniciales
  useEffect(() => {
    loadData();
  }, []);

  // Función asíncrona para pedir datos al backend
  const loadData = async (filter = '') => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers(filter);
      setUsers(data);
    } catch (err) {
      setError('Error conectando al servidor.');
    } finally {
      setLoading(false);
    }
  };

  // Manejador del buscador
  const handleSearch = (e) => {
    e.preventDefault();
    loadData(searchTerm);
  };

  return (
    <div className="min-h-screen flex flex-col bg-offy-light">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-md p-8">
          
         {/* Barra de filtro */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-offy-dark">Usuarios</h2>
            
            <form onSubmit={handleSearch} className="flex w-full md:w-auto gap-2">
              <input 
                type="text"
                placeholder="Buscar usuario..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-offy-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-offy-dark text-white px-6 py-2 rounded-lg hover:bg-black transition"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* Tabla */}
          {loading ? (
            <div className="text-center py-10 text-offy-blue font-bold animate-pulse">Cargando datos...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-500 font-bold">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-offy-dark uppercase text-sm">
                    <th className="py-4 px-6 rounded-l-lg">Nombre</th>
                    <th className="py-4 px-6 text-center rounded-r-lg">Posts Publicados</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition">
                        <td className="py-4 px-6 font-medium">{user.name}</td>
                        <td className="py-4 px-6 text-center">
                          <span className="bg-blue-100 text-offy-blue py-1 px-3 rounded-full text-xs font-bold">
                            {user.postCount}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center py-6">No se encontraron resultados.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;