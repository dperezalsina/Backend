import express from 'express';
import fs from 'fs'
import './ProductManager.js'

const app = express();

app.get('/products', (req, res)=>{
    
    
    let {limit} = req.query

    let lecturaArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))

    if(limit && !isNaN(limit)){
    lecturaArchivo = lecturaArchivo.slice(0, parseInt(limit))
    }


    res.send(lecturaArchivo)

})

app.get('/products/:pid', (req,res)=>{

    let lecturaArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'))

    let {pid} = req.params

    let archivoFiltrado = lecturaArchivo.find(productId=>{
        return productId.id===Number(pid)
        
    })


    res.send(archivoFiltrado)


})





app.listen(8080,()=>console.log("Server up, port 8080"))

