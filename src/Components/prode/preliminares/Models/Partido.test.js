import Partido from './Partido';

describe('unit test Partido', () => {
	it('should create a Partido', () => {
		const partido = new Partido('A', 'Argentina', 'Brasil');
		expect(partido.partidoid).toBe('A-Argentina-Brasil');
		expect(partido.equipoA).toBe('Argentina');
		expect(partido.equipoB).toBe('Brasil');
		expect(partido.golesequipoA).toBe('');
		expect(partido.golesequipoB).toBe('');
	});
	it('should create a Partido with goles', () => {
		const partido = new Partido('A', 'Argentina', 'Brasil', '1', '2');
		expect(partido.partidoid).toBe('A-Argentina-Brasil');
		expect(partido.equipoA).toBe('Argentina');
		expect(partido.equipoB).toBe('Brasil');
		expect(partido.golesequipoA).toBe('1');
		expect(partido.golesequipoB).toBe('2');
	});
	it('should update a Partido', () => {
		const partido = new Partido('A', 'Argentina', 'Brasil');
		partido.setgolesequipoA('1');
		partido.setgolesequipoB('2');
		expect(partido.golesequipoA).toBe('1');
		expect(partido.golesequipoB).toBe('2');

		partido.setgolesequipoA('');
		partido.setgolesequipoB('');
		expect(partido.golesequipoA).toBe('');
		expect(partido.golesequipoB).toBe('');
	});

	it('should throw when goles is not a number', () => {
		const partido = new Partido('A', 'Argentina', 'Brasil');
		expect(() => partido.setgolesequipoA('a')).toThrow();
		expect(() => partido.setgolesequipoB('a')).toThrow();
	});

	it('should throw when goles is negative', () => {
		const partido = new Partido('A', 'Argentina', 'Brasil');
		expect(() => partido.setgolesequipoA('-1')).toThrow();
		expect(() => partido.setgolesequipoB('-1')).toThrow();
	});

	it('should return the winner', () => {
		const partido = new Partido('A', 'Argentina', 'Brasil');
		partido.setgolesequipoA('1');
		partido.setgolesequipoB('2');
		expect(partido.resultado()).toBe('gana Brasil');

		partido.setgolesequipoA('2');
		partido.setgolesequipoB('1');
		expect(partido.resultado()).toBe('gana Argentina');

		partido.setgolesequipoA('1');
		partido.setgolesequipoB('1');
		expect(partido.resultado()).toBe('empate');

		partido.setgolesequipoA('');
		partido.setgolesequipoB('');
		expect(partido.resultado()).toBe('sin resultados');

		partido.setgolesequipoA('');
		partido.setgolesequipoB('1');
		expect(partido.resultado()).toBe('sin resultados');

		partido.setgolesequipoA('1');
		partido.setgolesequipoB('');
		expect(partido.resultado()).toBe('sin resultados');
	});
});
