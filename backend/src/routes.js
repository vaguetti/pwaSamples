const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploads');

const SessionControler  = require('./controlers/SessionControler');
const SpotControler  = require('./controlers/SpotControler');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/users', (req,res) => { 
    // req.query (acessa query params - filtros XRXX)
    // exemplo: http://localhost:3333/users?idade=30
    return res.json({ idade : req.query.idade})
});
/*routes.post('/users', (req,res) => { 
    // req.body (acessa corpo da requisição - CXUX)
    // exemplo: http://localhost:3333/users/
    return res.json(req.body)
});*/
routes.post('/sessions', SessionControler.store); // vinculando a rota ao controler 
routes.post('/spots', upload.single('thumbnail'),SpotControler.store);

routes.put('/users/:id', (req,res) => { 
    // req.params (acessa route params - CXUD)
    // exemplo: http://localhost:3333/users/1
    return res.json({ id : req.params.id})
});

module.exports = routes;


