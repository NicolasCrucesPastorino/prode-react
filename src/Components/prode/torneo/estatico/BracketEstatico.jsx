export const BracketEstatico = props => {
	const torneo = props.torneo;
	const octavos = props.octavos;
	const resultados = props.resultados;

	const mostrarcolor = key => {
		const ganador = ' winner';
		const perdedor = ' loser';
		const sinpuntaje = '';

		if (resultados && resultados.torneo) {
			const container = key.split('-')[0];
			const list = resultados.torneo[container];
			const equipoPuntaje = list.find(r => r.formKey === key);
			if (equipoPuntaje) {
				const puntosEquipo = equipoPuntaje.puntos;
				if (puntosEquipo > 0) {
					return ganador;
				} else if (puntosEquipo === 0) {
					return perdedor;
				} else {
					return sinpuntaje;
				}
			} else {
				// throw new Error("Clave del formulario no existe");
			}
		} else {
			return sinpuntaje;
		}
	};

	return (
		<div className='bracket'>
			<section className='round of16'>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-a']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-b']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-c']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-d']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-e']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-f']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-g']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-h']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-b']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-a']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-d']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-c']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-f']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-e']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div className='participant'>
									<span>{octavos['1-h']}</span>
								</div>
								<div className='participant'>
									<span>{octavos['2-g']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
			</section>
			<section className='round quarterfinals'>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-a-1')
									}
								>
									<span> {torneo['cuartos-a-1']} </span>
								</div>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-a-2')
									}
								>
									<span>{torneo['cuartos-a-2']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-b-1')
									}
								>
									<span>{torneo['cuartos-b-1']}</span>
								</div>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-b-2')
									}
								>
									<span>{torneo['cuartos-b-2']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-c-1')
									}
								>
									<span>{torneo['cuartos-c-1']}</span>
								</div>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-c-2')
									}
								>
									<span>{torneo['cuartos-c-2']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-d-1')
									}
								>
									<span>{torneo['cuartos-d-1']}</span>
								</div>
								<div
									className={
										'participant ' +
										mostrarcolor('cuartos-d-2')
									}
								>
									<span>{torneo['cuartos-d-2']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
			</section>
			<section className='round semifinals'>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' +
										mostrarcolor('semi-a-1')
									}
								>
									<span>{torneo['semi-a-1']}</span>
								</div>
								<div
									className={
										'participant ' +
										mostrarcolor('semi-a-2')
									}
								>
									<span>{torneo['semi-a-2']}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' +
										mostrarcolor('semi-b-1')
									}
								>
									<span>{torneo['semi-b-1']}</span>
								</div>
								<div
									className={
										'participant ' +
										mostrarcolor('semi-b-2')
									}
								>
									<span>{torneo['semi-b-2']}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='connector'>
						<div className='merger'></div>
						<div className='line'></div>
					</div>
				</div>
			</section>
			<section className='round finals'>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' + mostrarcolor('final-a')
									}
								>
									<span>{torneo['final-a']}</span>
								</div>
								<div
									className={
										'participant ' + mostrarcolor('final-b')
									}
								>
									<span>{torneo['final-b']}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='round champion'>
				<div className='winners'>
					<div className='matchups'>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' + mostrarcolor('campeon')
									}
								>
									<span>{torneo.campeon}</span>
								</div>
							</div>
						</div>
						<div className='matchup'>
							<div className='participants'>
								<div
									className={
										'participant ' + mostrarcolor('tercero')
									}
								>
									<span>{torneo.tercero}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
