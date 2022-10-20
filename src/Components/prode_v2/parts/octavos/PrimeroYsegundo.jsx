import ConsumerProdeContext from "../../ProdeProvider";

const PrimeroYsegundo = ({ nombreGrupo = "", equipos = [] }) => {
  const { getOctavoByKey, updateOctavos } = ConsumerProdeContext();

  const primeroKey = `1-${nombreGrupo}`;
  const segundoKey = `2-${nombreGrupo}`;

  const handleOnChangePrimero = (event) => {
    updateOctavos(primeroKey, event.target.value);
  };

  const handleOnChangeSegundo = (event) => {
    updateOctavos(segundoKey, event.target.value);
  };

  return (
    <article>
      <h3>Grupo {nombreGrupo.toUpperCase()}</h3>
      <label>1ro: </label>
      <select onChange={handleOnChangePrimero} name={primeroKey}>
        <option value="">seleccione un pais</option>
        {equipos.map((equipo) => (
          <option
            value={equipo}
            selected={getOctavoByKey(primeroKey) === equipo ? true : false}
          >
            {equipo}
          </option>
        ))}
      </select>

      <label> 2do: </label>
      <select onChange={handleOnChangeSegundo} name={segundoKey}>
        <option value="">seleccione un pais</option>
        {equipos.map((equipo) => (
          <option
            value={equipo}
            selected={getOctavoByKey(segundoKey) === equipo ? true : false}
          >
            {equipo}
          </option>
        ))}
      </select>
    </article>
  );
};

export default PrimeroYsegundo;
