const express = require('express');

const app = express();
app.use(express.json());
app.get('/users', (req,res) => { 
      // req.query (acessa query params - filtros XRXX)
      // exemplo: http://localhost:3333/users?idade=30
      return res.json({ idade : req.query.idade})
});
/*app.post('/users', (req,res) => { 
    //  return res.send('Hello World')
      return res.json({ message : "Hello OmniStack"})
  }); */
app.post('/users', (req,res) => { 
      // req.body (acessa corpo da requisição - CXUX)
      // exemplo: http://localhost:3333/users/
      return res.json(req.body)
  });  
app.put('/users/:id', (req,res) => { 
      // req.params (acessa route params - CXUD)
      // exemplo: http://localhost:3333/users/1
      return res.json({ id : req.params.id})
  });
app.listen(3333);