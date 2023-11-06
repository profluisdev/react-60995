export const Promises = () => {
  const promesa = new Promise((resolve, reject) => {
    const condicion = false;

    if (condicion) {
      resolve("La condición se cumple");
    } else {
      reject("La condición no de cumple ");
    }
  });

  // Obtener la información de la promesa si la promesa se cumple o no 
//   promesa
//     .then( response => console.log(response) )
//     .catch( error => console.log(error) );

// Obtener la información de la promesa con async y await 
const resolvePromise = async () => {
    try {
        const response = await promesa;
        console.log(response)

    } catch (error) {
        console.log(error);
    }
}

resolvePromise();

  return <div>Promises</div>;
};
