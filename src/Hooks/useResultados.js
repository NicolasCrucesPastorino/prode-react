import React, { useContext, useState } from 'react'

const resultadoscontext = React.createContext();

const useResultados = () => {

    const [resultados, setresultados] = useState([])

    const agregarresultado = (resultado) => {
        const existeresultado = resultados.find(r => r.partidoid === resultado.partidoid)
        if (!existeresultado) {
            setresultados([...resultados, resultado])
        } else {
            const updatedresultados = resultados.map(r => {
                if (r.partidoid === resultado.partidoid) {
                    return resultado
                }
                else {
                    return r
                }
            })
            setresultados(updatedresultados)
        }
    }


    return {
        resultados,
        agregarresultado
    }


}
export const ResultadosProvider = ({ children }) => {
    const resultados = useResultados()


    return (
        <resultadoscontext.Provider value={resultados}>
            {children}
        </resultadoscontext.Provider>
    )
}
export default () => {

    return useContext(resultadoscontext)
}