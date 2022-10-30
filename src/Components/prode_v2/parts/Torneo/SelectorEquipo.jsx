import ConsumerProdeContext from '../../ProdeProvider';

const SelectorEquipo = ({
	equipos,
	keySelector,
	onChange,
	titleEmptyValue = 'Seleccione un equipo',
}) => {
	const { getTorneoByKey } = ConsumerProdeContext();

	return (
		<select onChange={onChange} name={keySelector}>
			<option value=''>{titleEmptyValue}</option>
			{equipos.map(equipo => (
				<option
					key={equipo}
					value={equipo}
					selected={getTorneoByKey(keySelector) === equipo}
				>
					{equipo}
				</option>
			))}
		</select>
	);
};

export default SelectorEquipo;
