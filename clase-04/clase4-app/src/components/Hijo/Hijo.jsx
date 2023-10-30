/* 
    const props = {
        mensaje: "Hola hijo"
        mesada: 100
    }
*/

export const Hijo = ({ mensaje, mesada }) => {
  return (
    <>
      <div>Mostrar prop: {mensaje} </div>
      <div>Mesada: {mesada} </div>
    </>
  );
};
