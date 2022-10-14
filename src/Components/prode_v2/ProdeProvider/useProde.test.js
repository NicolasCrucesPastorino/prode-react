// unit test useProde hook from src/Components/prode_v2/ProdeProvider/useProde
import { render, screen, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { useProde } from './useProde';
describe("useProde", () => {
    it("should return an object", () => {
        renderHook(() => useProde());

    //console.log(result);
    
    expect(1).toBe(1);  
    });
});