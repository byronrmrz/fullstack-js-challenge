const request = require('supertest');
const app = require('../src/app');


describe('GET /api/posts', () => {

    it('Prueba: Devolver array JSON con Name y # de posts', async ()=>{
        
        const res= await request(app).get('/api/posts');

        
        //Verifico Status 200
        expect(res.statusCode).toEqual(200);

        //Verifico que sea un array
        expect(Array.isArray(res.body)).toBeTruthy();

        //Verifico que existan datos
        if(res.bodylenght >0){
            expect(res.body[0]).toHaveProperty('name');
            expect(res.body[0]).toHaveProperty('postCount');
        }
    })
})
