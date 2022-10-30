import ConsumerProdeContext from '../../ProdeProvider';

const SelectorEquipo = ({
	equipos,
	key_selector,
	onChange,
	title_empty_value = 'Seleccione un equipo',
}) => {
	const { getTorneoByKey } = ConsumerProdeContext();

	return (
		<select onChange={onChange} name={key_selector}>
			<option value=''>{title_empty_value}</option>
			{equipos.map(equipo => (
				<option
					key={equipo}
					value={equipo}
					selected={getTorneoByKey(key_selector) === equipo}
				>
					{equipo}
				</option>
			))}
		</select>
	);
};

export default SelectorEquipo;
