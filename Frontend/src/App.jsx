import { useState, useEffect } from 'react'

function App() {
  // 1. Estados para manejar los datos
  const [users, setUsers] = useState([]) // Lista completa de usuarios
  const [searchTerm, setSearchTerm] = useState("") // Lo que escribe el usuario
  const [loading, setLoading] = useState(true) // Para mostrar "Cargando..."
  const [error, setError] = useState(null) // Por si falla la conexión

  // 2. useEffect: Se ejecuta una vez al cargar la página
  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then(response => {
        if (!response.ok) throw new Error('Error al conectar con el servidor')
        return response.json()
      })
      .then(data => {
        setUsers(data) // Guardamos los datos reales
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('No se pudo conectar con el Backend. ¿Está encendido?')
        setLoading(false)
      })
  }, [])

  // 3. Lógica de Filtrado (Requisito del examen)
  // Filtramos la lista basándonos en lo que el usuario escribió
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* ENCABEZADO */}
        <div className="bg-blue-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            Dashboard de Usuarios
          </h1>
          <p className="text-blue-100 mt-2">
            Prueba Técnica Full Stack - Offymarket
          </p>
        </div>

        {/* BARRA DE BÚSQUEDA (Requisito) */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <input 
            type="text"
            placeholder="Buscar por nombre de usuario..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* TABLA DE RESULTADOS (Requisito) */}
        <div className="p-6">
          {loading && <p className="text-center text-gray-500">Cargando datos...</p>}
          
          {error && <p className="text-center text-red-500 font-bold">{error}</p>}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Usuario</th>
                    <th className="py-3 px-6 text-center">Cantidad de Posts</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition">
                        <td className="py-3 px-6 text-left whitespace-nowrap font-medium">
                          {user.name}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className="bg-blue-200 text-blue-700 py-1 px-3 rounded-full text-xs font-bold">
                            {user.postCount}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="py-4 text-center text-gray-500">
                        No se encontraron usuarios con ese nombre.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="bg-gray-50 p-4 text-center text-xs text-gray-400">
          Desarrollado con React + TailwindCSS
        </div>
      </div>
    </div>
  )
}

export default App