import express from 'express'; // ESModules
// const express = require('express) --> commonjs
import diaryRoutes from './routes/diaries.routes';

const app = express();

app.use(express.json())// middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping',(_req,res)=>{ // typescript ignora errores parametros con guión bajo
    console.log('someone pinged here!!' + new Date().toLocaleDateString());
    res.send('pong');
});

app.use('/api/diaries',diaryRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})