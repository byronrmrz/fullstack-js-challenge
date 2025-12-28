const {Router } = require('express');
const router = Router();
const postService = require('../services/post.service');
router.get('/', async (req, res) => {
    try {
    
        const { name } = req.query; 

        const data = await postService.getAllPosts(name);
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports= router;
