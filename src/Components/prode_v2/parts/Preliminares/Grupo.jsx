import Partido from "./Partido";

const Grupo = ({nombre, partidos}) => {
  
  return (
    <div className="containeritem col-md-5">
      <h1>Grupo {nombre}</h1>
      {partidos.map((partido) => (
        <Partido key={partido.partidoid} partido={partido} />
      ))}
    </div>
  );
};

export default Grupo;
