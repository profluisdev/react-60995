const products = [
  { id: "1", name: "Zapato", img: "url-img", price: 100, category: "calzados", description: "Una Zapato", stock: 10 },
  { id: "2", name: "Bota", img: "url-img", price: 100, category: "calzados", description: "Una Bota", stock: 10 },
  { id: "3", name: "Ojota", img: "url-img", price: 100, category: "calzados", description: "Un Ojota", stock: 10 },
  { id: "4", name: "Zapatilla", img: "url-img", price: 100, category: "calzados", description: "Una Zapatilla", stock: 10 },
  { id: "5", name: "Remera", img: "url-img", price: 100, category: "ropa", description: "Una Remera", stock: 10 },
  { id: "6", name: "Camisa", img: "url-img", price: 100, category: "ropa", description: "Una Camisa", stock: 10 },
  { id: "7", name: "Pantalón", img: "url-img", price: 100, category: "ropa", description: "Una Pantalón", stock: 10 },
];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };