const products = [
    { id: "1", name: "Camisa", description: "Una camisa", stock: 4 },
    { id: "2", name: "Corbata", description: "Una Corbata", stock: 8 },
    { id: "3", name: "Pantalón", description: "Un Pantalón", stock: 10 },
    { id: "4", name: "Zapatilla", description: "Una Zapatilla", stock: 10 },
  ];

// ;) ;) 
export const getProducts = () => { 

    return new Promise( (resolve, reject) => { 
        if(products.length > 0) {
            setTimeout ( () => { 
                 resolve( products )   
             }, 2000)
        } else {
            reject("No hay productos, valla a comprar a otro lado")
        }
    } )
 }