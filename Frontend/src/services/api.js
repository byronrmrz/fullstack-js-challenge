const BASE_URL = 'http://localhost:3000/api/posts';

// Recibo filtro si traigo
export const getUsers = async (filterName = '') => {
    try {

        // Construyo la url dinámica
        const url = filterName 
            ? `${BASE_URL}?name=${encodeURIComponent(filterName)}` 
            : BASE_URL;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }
        
        return await response.json();

    } catch (error) {
        console.error("Error en servicio getUsers:", error);
        throw error;
    }
}