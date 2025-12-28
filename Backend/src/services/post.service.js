const API_URL = "https://687eade4efe65e5200875629.mockapi.io/api/v1/posts";

//Función para obtener todos los posts y agrupar por usuario
const getAllPosts = async (filterName = null) => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error en la API Externa ${response.statusText}`)
        }

        const rawData = await response.json();

        // Uso reduce para contar posts por usuario
        const userCounter = rawData.reduce((acc, post) => {
            const nombre = post.name;
            if (nombre) {
                acc[nombre] = (acc[nombre] || 0) + 1;
            }
            return acc;
        }, {});

        // Convierto a Array
        let finalResult = Object.entries(userCounter).map(([name, count]) => {
            return {
                name,
                postCount: count
            }
        });

        // Aplicamos el filtro (Si filterName trae data)
        if (filterName) {
            finalResult = finalResult.filter(item => 
                item.name.toLowerCase().includes(filterName.toLowerCase())
            );
        }

        return finalResult;

    } catch (error) {
        console.error('Error en el servicio: ', error);
        throw error;
    }
};

module.exports = { getAllPosts };