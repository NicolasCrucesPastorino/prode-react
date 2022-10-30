import ConsumerProdeContext from '../../ProdeProvider';

const SelectorEquipo = ({
	equipos,
	keySelector,
	onChange,
	titleEmptyValue = 'Seleccione un equipo',
}) => {
	const { getTorneoByKey } = ConsumerProdeContext();

	return (
		<select onChange={onChange} name={keySelector} defaultValue=''>
			<option>{titleEmptyValue}</option>
			{equipos.map((equipo, index) => (
				<option
					key={keySelector + equipo + index}
					value={equipo}
					defaultValue=''
					selected={getTorneoByKey(keySelector) === equipo}
				>
					{equipo}
				</option>
			))}
		</select>
	);
};

export default SelectorEquipo;
