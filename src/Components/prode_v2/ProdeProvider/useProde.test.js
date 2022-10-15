// unit test useProde hook from src/Components/prode_v2/ProdeProvider/useProde
import { renderHook } from '@testing-library/react';
import Grupo from '../../prode/preliminares/Models/Grupo';
import { useProde } from './useProde';
describe("useProde", () => {
    it("should return an object", () => {
        const {result} = renderHook(() => useProde());
        const {resultados} = result.current;
        
        console.log(result.current);
        expect(resultados).not.toBeUndefined();
        // expect any element of the array to be an Grupo object
        resultados.forEach((grupo) => {
            expect(grupo).toBeInstanceOf(Grupo);
        });
    });
});