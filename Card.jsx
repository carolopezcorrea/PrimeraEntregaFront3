//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import { useState } from 'react'

const Card = ({ datos }) => {
  return (
    <div>
      <h2>Información recibida:</h2>
      <p>Name: {datos.name}</p>
      <p>Cellphone: {datos.cellphone}</p>
      <p>Age: {datos.age}</p>
    </div>
  );
};


export default Card;
