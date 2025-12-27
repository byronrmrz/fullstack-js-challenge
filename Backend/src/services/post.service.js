
const API_URL = "https://687eade4efe65e5200875629.mockapi.io/api/v1/posts";

const getAllPosts = async () => {
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error(`Error en la API Externa ${response.statusText}`)
        }

        const rawData = await response.json();


        const userCounter = rawData.reduce((acc, post) => {
            const nombre = post.name;
            if(nombre){
                acc[nombre] = (acc[nombre] || 0) + 1;
            }
            return acc;
        }, {});

        const finalResult = Object.entries(userCounter).map(([name,count]) => {
            return{
                name,
                postCount: count 
            }
            
        });

        // if(filterName){
        //     finalResult = finalResult.filter(item => 
        //         item.name.toLowerCase().includes(filterName.toLowerCase())
        //     );
        // }


        // const data = await response.json();
        return finalResult;

    }
    catch(error){
        console.error('Error en el servicio: ',error);
        throw error;
        // throw new Error('Error fetching posts');
    }
};

module.exports = { getAllPosts };