
/* 
Técnica de rendering condicional N° 2
En linea con fragment:
La usamos cuando deseamos renderizar un elemento condicional en función a una expresión booleana

*/

export const TecnicaDos = ( { status }) => {
  return (
    <>
    { stock > 0 && <button>Agregar al carrito</button> }
    { status && <h2>Usuario autorizado pase nomas</h2>}
    { !status && <h2>Usuario no autorizado anda palla</h2>}
    </>
  )
}
