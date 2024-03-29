import fs from 'fs';

class ProductManager{
    constructor(path){
        this.path = path
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{ 
        const producto ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        const found = this.products.find(codigo => codigo.code === producto.code); 

        if(this.products.length === 0){
            producto.id = 1;
        }
        else{
            producto.id = this.products [this.products.length-1].id+1
        }

        if (found == undefined){  
            if(producto.title === "" || producto.description === "" || producto.price === "" || producto.thumbnail === "" || producto.stock === "")
            console.log("Todos los campos son obligatorios")
            else{
            this.products.push(producto);
            const objetoJson = JSON.stringify(this.products, null,'\t')
            fs.writeFileSync('./productos.txt', objetoJson)
            }
        }
        else{
            console.log(`ya se encuentra registrado el campo "code" para ${producto.title}`)
        }
    }

    getProducts = ()=>{
        if(fs.existsSync('./productos.txt')){
            let contenidoArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
            console.log(contenidoArchivo);
        }
    }

    getProductById = (idProducto)=>{
        if(fs.existsSync('./productos.txt')){
            let contenidoArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
        
            if (contenidoArchivo.length === 0){
                console.error("Not found");
            }
            else{
                const idFound = contenidoArchivo.find(idProduct => idProduct.id === idProducto)

                if(idFound == undefined || idFound.id != idProducto){

                    console.error("Not fo")
                    
                }
                else{
                    console.log(idFound)
                    return idFound
                }
            }
        }
    }
    
    updateProduct = (idProducto, campo, valorCampo)=>{
        if(fs.existsSync('./productos.txt')){
            let contenidoArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
        
            if (contenidoArchivo.length === 0){
                console.error("Not found");
            }
            else{
                const idFound = contenidoArchivo.find(idProduct => idProduct.id === idProducto)

                if(idFound == undefined || idFound.id != idProducto){

                    console.error("Not found")
                    
                }
                else{
                    switch(campo){
                        case 'title':
                            idFound.title = valorCampo
                            break;
                        case 'description':
                            idFound.description = valorCampo
                            break;
                        case 'price':
                            idFound.price = valorCampo
                            break;
                        case 'thumbnail':
                            idFound.thumbnail = valorCampo
                            break;
                        case 'code':
                            idFound.code = valorCampo
                            break;
                        case 'stock':
                            idFound.stock = valorCampo
                        default:
                            console.log('campo no encontrado');
                            break;
                    }
                    console.log(idFound)
                    let contenidoFiltrado = contenidoArchivo.filter((objetoEliminar)=>objetoEliminar !== idFound);
                    console.error(contenidoFiltrado)
                    contenidoFiltrado.push(idFound);
                    console.error(contenidoFiltrado)
                    let filtradoJson = JSON.stringify(contenidoFiltrado, null, '\t')
                    fs.writeFileSync('./productos.txt', filtradoJson)
                    
                }
                    
            }
        }
    }

    deleteProduct = (idEliminar =>{
        if(fs.existsSync('./productos.txt')){
            let contenidoArchivo = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
        
            if (contenidoArchivo.length === 0){
                console.error("Not found");
            }
            else{
                const idFound = contenidoArchivo.find(idProduct => idProduct.id === idEliminar)

                if(idFound == undefined || idFound.id != idEliminar){

                    console.error("Not found")
                    
                }
                else{
                    let contenidoFiltrado = contenidoArchivo.filter((objetoEliminar)=>objetoEliminar !== idFound)
                    let filtradoJson = JSON.stringify(contenidoFiltrado, null, '\t')
                    fs.writeFileSync('./productos.txt', filtradoJson)  
                }
                    
            }
        }
    })
}



const productoNuevo = new ProductManager();



productoNuevo.addProduct("producto 1", "producto prueba", 200, "Sin imagen", "abc1", 25)

productoNuevo.addProduct("producto 2", "Este es un producto prueba", 200, "Sin imagen", "abc2", 25)

productoNuevo.addProduct("producto 3", "Este es un o prueba", 200, "Sin imagen", "abc3", 25)

productoNuevo.addProduct("producto 4", "Este es un producto prueba", 200, "Sin imagen", "abc4", 25)

productoNuevo.addProduct("producto 5", "Este es un producto prueba", 200, "Sin imagen", "abc5", 25)

productoNuevo.addProduct("producto 6", "Este es un producto prueba", 200, "Sin imagen", "abc6", 25)

productoNuevo.addProduct("producto 7", "Este es un producto prueba", 200, "Sin imagen", "abc7", 25)

productoNuevo.addProduct("producto 8", "Este es un producto prueba", 200, "Sin imagen", "abc8", 25)

productoNuevo.addProduct("producto 9", "Este es un producto prueba", 200, "Sin imagen", "abc9", 25)

productoNuevo.addProduct("producto 10", "Este es un producto prueba", 200, "Sin imagen", "abc10", 25)





