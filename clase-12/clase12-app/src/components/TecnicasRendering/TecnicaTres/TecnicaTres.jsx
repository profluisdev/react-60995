/* 
Técnica de rendering condicional N° 3
Operador ternario

*/
export const TecnicaTres = ({ status }) => {
  return (
    <>
      { status ? <h2>Acceso permitido pase nomas</h2> : <h2>Acceso denegado anda palla a la casa o Afuera !!!</h2> }
      {/* Uso para un loading */}
      {/* {isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />} */}
    </>
  )
}
