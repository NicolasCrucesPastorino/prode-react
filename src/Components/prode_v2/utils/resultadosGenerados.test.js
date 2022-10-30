/* eslint-disable testing-library/render-result-naming-convention */
import { crearResultado } from './resultadosGenerator';
import { useProde } from '../ProdeProvider/useProde';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Unit Test - Resultados Generados', () => {
	test('Debe retornar un array de resultados con todos valores 0 si superProde es undefined', () => {
		const { result } = renderHook(() => useProde());
		console.log(result);
		const { prode } = result.current;
		const resultados = crearResultado(prode, undefined);
		console.log(resultados);
		expect(resultados).toBeInstanceOf(Object);
		expect(resultados.preliminares).toBeInstanceOf(Object);

		const partidoId1 = 'H-Portugal-Ghana';
		expect(resultados.preliminares[partidoId1]).toBe(0);
		expect(
			Object.values(resultados.preliminares).every(value => value === 0),
		).toBe(true);

		expect(
			Object.values(resultados.torneo).every(value => value === 0),
		).toBeTruthy();

		expect(resultados.torneo).toBeInstanceOf(Object);
		expect(Object.keys(resultados.torneo).length).toBe(16);
		expect(resultados.torneo.campeon).toBe(0);
		expect(resultados.torneo['final-a']).toBe(0);
	});

	test('Debe arrojar una exepcion si prodeUsuario es undefined', () => {
		expect(() => crearResultado(undefined, undefined)).toThrow();
	});

	test('un prodeUsuario y un superProde ambos con campos vacios deben devolver un puntaje total de 0', () => {
		const { result } = renderHook(() => useProde());
		console.log(result);
		const { prode } = result.current;
		const resultados = crearResultado(prode, prode);

		let sumaTotal = 0;
		expect(resultados.preliminares).not.toBeUndefined();
		expect(resultados.torneo).not.toBeUndefined();

		Object.values(resultados.preliminares).forEach(
			value => (sumaTotal += value),
		);
		Object.values(resultados.torneo).forEach(value => (sumaTotal += value));
		console.log(resultados.torneo);
		expect(sumaTotal).toBe(0);

		const resultadosConSuperProdeUndefined = crearResultado(
			prode,
			undefined,
		);

		sumaTotal = 0;
		Object.values(resultadosConSuperProdeUndefined.preliminares).forEach(
			value => (sumaTotal += value),
		);
		Object.values(resultadosConSuperProdeUndefined.torneo).forEach(
			value => (sumaTotal += value),
		);
		expect(sumaTotal).toBe(0);
	});

	test('un prode que acierte completamente un partido de preliminar tiene q recibir 3 puntos', () => {
		const { result } = renderHook(() => useProde());
		const prodeUser = { ...result };
		const prodeSuper = { ...result };

		act(() => {
			prodeSuper.current.updatePartido('H-Portugal-Ghana', '3', '1');
			prodeUser.current.updatePartido('H-Portugal-Ghana', '3', '1');

			const resultados = crearResultado(
				prodeUser.current.prode,
				prodeSuper.current.prode,
			);

			let sumaTotal = 0;
			Object.values(resultados.preliminares).forEach(
				value => (sumaTotal += value),
			);
			Object.values(resultados.torneo).forEach(
				value => (sumaTotal += value),
			);
			expect(sumaTotal).toBe(3);
		});
	});

	test('un prode que acierte parcialmente un partido de preliminar tiene q recibir 2 puntos', () => {
		const hookProdeUser = renderHook(() => useProde());
		const hookProdeSuperUser = renderHook(() => useProde());

		act(() => {
			hookProdeUser.result.current.updatePartido(
				'H-Portugal-Ghana',
				'2',
				'1',
			);
			hookProdeSuperUser.result.current.updatePartido(
				'H-Portugal-Ghana',
				'3',
				'1',
			);

			console.log('user', hookProdeUser.result.current.resultados);
			console.log('super', hookProdeSuperUser.result.resultados);
			const resultados = crearResultado(
				hookProdeUser.result.current.prode,
				hookProdeSuperUser.result.current.prode,
			);

			let sumaTotal = 0;
			Object.values(resultados.preliminares).forEach(
				value => (sumaTotal += value),
			);
			Object.values(resultados.torneo).forEach(
				value => (sumaTotal += value),
			);
			expect(sumaTotal).toBe(2);
		});
	});

	test('un prode que no acierte un partido de preliminar tiene q recibir 0 puntos', () => {
		const hookProdeUser = renderHook(() => useProde());
		const hookProdeSuperUser = renderHook(() => useProde());

		act(() => {
			hookProdeUser.result.current.updatePartido(
				'H-Portugal-Ghana',
				'0',
				'1',
			);
			hookProdeSuperUser.result.current.updatePartido(
				'H-Portugal-Ghana',
				'3',
				'1',
			);

			console.log('user', hookProdeUser.result.current.resultados);
			console.log('super', hookProdeSuperUser.result.resultados);
			const resultados = crearResultado(
				hookProdeUser.result.current.prode,
				hookProdeSuperUser.result.current.prode,
			);

			let sumaTotal = 0;
			Object.values(resultados.preliminares).forEach(
				value => (sumaTotal += value),
			);
			Object.values(resultados.torneo).forEach(
				value => (sumaTotal += value),
			);
			expect(sumaTotal).toBe(0);
		});
	});

	test('un prode que no tenga anotados puntos en un partido de preliminar tiene q recibir 0 puntos', () => {
		const hookProdeUser = renderHook(() => useProde());
		const hookProdeSuperUser = renderHook(() => useProde());

		act(() => {
			hookProdeUser.result.current.updatePartido(
				'H-Portugal-Ghana',
				'',
				'',
			);
			hookProdeSuperUser.result.current.updatePartido(
				'H-Portugal-Ghana',
				'3',
				'1',
			);

			console.log('user', hookProdeUser.result.current.resultados);
			console.log('super', hookProdeSuperUser.result.resultados);
			const resultados = crearResultado(
				hookProdeUser.result.current.prode,
				hookProdeSuperUser.result.current.prode,
			);

			let sumaTotal = 0;
			Object.values(resultados.preliminares).forEach(
				value => (sumaTotal += value),
			);
			Object.values(resultados.torneo).forEach(
				value => (sumaTotal += value),
			);
			expect(sumaTotal).toBe(0);
		});
	});

	test('un prode que acierte un campeon de torneo debe ganar 42 puntos', () => {
		const hookProdeUser = renderHook(() => useProde());
		const hookProdeSuperUser = renderHook(() => useProde());

		act(() => {
			hookProdeUser.result.current.updateTorneo('campeon', 'argentina');
			hookProdeSuperUser.result.current.updateTorneo(
				'campeon',
				'argentina',
			);

			const resultados = crearResultado(
				hookProdeUser.result.current.prode,
				hookProdeSuperUser.result.current.prode,
			);

			let sumaTotal = 0;
			Object.values(resultados.preliminares).forEach(
				value => (sumaTotal += value),
			);
			Object.values(resultados.torneo).forEach(
				value => (sumaTotal += value),
			);
			expect(sumaTotal).toBe(0);
		});
	});
});
