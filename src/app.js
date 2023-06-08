import express from 'express';
import fs from 'fs'
import './ProductManager.js'

const app = express();

app.get('/products', (req, res)=>{
    const lecturaArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))

    res.send(lecturaArchivo)
})





app.listen(8080,()=>console.log("Server up, port 8080"))

