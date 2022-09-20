import { etapa } from "../Constantes"
import { calcularPuntosTorneo, obtenerListaEquipos } from "./superprodefunctions"

describe('unit test over super prode funtions', () => {
    
    const prode = {
        "resultados": [
            {
                "nombre": "A",
                "partidos": [
                    {
                        "partidoid": "A-Senegal-Paises bajos",
                        "equipoA": "Senegal",
                        "equipoB": "Paises bajos",
                        "golesequipoA": 1,
                        "golesequipoB": 1
                    },
                    {
                        "partidoid": "A-Catar-Ecuador",
                        "equipoA": "Catar",
                        "equipoB": "Ecuador",
                        "golesequipoA": 1,
                        "golesequipoB": 2
                    },
                    {
                        "partidoid": "A-Catar-Senegal",
                        "equipoA": "Catar",
                        "equipoB": "Senegal",
                        "golesequipoA": 2,
                        "golesequipoB": 1
                    },
                    {
                        "partidoid": "A-Paises bajos-Ecuador",
                        "equipoA": "Paises bajos",
                        "equipoB": "Ecuador",
                        "golesequipoA": 1,
                        "golesequipoB": 3
                    },
                    {
                        "partidoid": "A-Ecuador-Senegal",
                        "equipoA": "Ecuador",
                        "equipoB": "Senegal",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "A-Paises bajos-Catar",
                        "equipoA": "Paises bajos",
                        "equipoB": "Catar",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "B",
                "partidos": [
                    {
                        "partidoid": "B-Inglaterra-Irán",
                        "equipoA": "Inglaterra",
                        "equipoB": "Irán",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Estados Unidos-Gales",
                        "equipoA": "Estados Unidos",
                        "equipoB": "Gales",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Gales-Irán",
                        "equipoA": "Gales",
                        "equipoB": "Irán",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Inglaterra-Estados Unidos",
                        "equipoA": "Inglaterra",
                        "equipoB": "Estados Unidos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Gales-Inglaterra",
                        "equipoA": "Gales",
                        "equipoB": "Inglaterra",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Irán-Estados Unidos",
                        "equipoA": "Irán",
                        "equipoB": "Estados Unidos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "C",
                "partidos": [
                    {
                        "partidoid": "C-Argentina-Arabia Saudita",
                        "equipoA": "Argentina",
                        "equipoB": "Arabia Saudita",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-México-Polonia",
                        "equipoA": "México",
                        "equipoB": "Polonia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Polonia-Arabia Saudita",
                        "equipoA": "Polonia",
                        "equipoB": "Arabia Saudita",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Argentina-México",
                        "equipoA": "Argentina",
                        "equipoB": "México",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Polonia-Argentina",
                        "equipoA": "Polonia",
                        "equipoB": "Argentina",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Arabia Saudita-México",
                        "equipoA": "Arabia Saudita",
                        "equipoB": "México",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "D",
                "partidos": [
                    {
                        "partidoid": "D-Dinamarca-Túnez",
                        "equipoA": "Dinamarca",
                        "equipoB": "Túnez",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Francia-Australia",
                        "equipoA": "Francia",
                        "equipoB": "Australia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Túnez-Australia",
                        "equipoA": "Túnez",
                        "equipoB": "Australia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Francia-Dinamarca",
                        "equipoA": "Francia",
                        "equipoB": "Dinamarca",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Australia-Dinamarca",
                        "equipoA": "Australia",
                        "equipoB": "Dinamarca",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Túnez-Francia",
                        "equipoA": "Túnez",
                        "equipoB": "Francia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "E",
                "partidos": [
                    {
                        "partidoid": "E-Alemania-Japón",
                        "equipoA": "Alemania",
                        "equipoB": "Japón",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-España-Costa Rica",
                        "equipoA": "España",
                        "equipoB": "Costa Rica",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-Japón-Costa Rica",
                        "equipoA": "Japón",
                        "equipoB": "Costa Rica",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-España-Alemania",
                        "equipoA": "España",
                        "equipoB": "Alemania",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-Japón-España",
                        "equipoA": "Japón",
                        "equipoB": "España",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-Costa Rica-Alemania",
                        "equipoA": "Costa Rica",
                        "equipoB": "Alemania",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "F",
                "partidos": [
                    {
                        "partidoid": "F-Marruecos-Croacia",
                        "equipoA": "Marruecos",
                        "equipoB": "Croacia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Bélgica-Canadá",
                        "equipoA": "Bélgica",
                        "equipoB": "Canadá",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Bélgica-Marruecos",
                        "equipoA": "Bélgica",
                        "equipoB": "Marruecos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Croacia-Canadá",
                        "equipoA": "Croacia",
                        "equipoB": "Canadá",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Croacia-Bélgica",
                        "equipoA": "Croacia",
                        "equipoB": "Bélgica",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Canadá-Marruecos",
                        "equipoA": "Canadá",
                        "equipoB": "Marruecos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "G",
                "partidos": [
                    {
                        "partidoid": "G-Suiza-Camerún",
                        "equipoA": "Suiza",
                        "equipoB": "Camerún",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Brasil-Serbia",
                        "equipoA": "Brasil",
                        "equipoB": "Serbia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Camerún-Serbia",
                        "equipoA": "Camerún",
                        "equipoB": "Serbia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Brasil-Suiza",
                        "equipoA": "Brasil",
                        "equipoB": "Suiza",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Serbia-Suiza",
                        "equipoA": "Serbia",
                        "equipoB": "Suiza",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Camerún-Brasil",
                        "equipoA": "Camerún",
                        "equipoB": "Brasil",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "H",
                "partidos": [
                    {
                        "partidoid": "H-Uruguay-Corea del sur",
                        "equipoA": "Uruguay",
                        "equipoB": "Corea del sur",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Portugal-Ghana",
                        "equipoA": "Portugal",
                        "equipoB": "Ghana",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Corea del sur-Ghana",
                        "equipoA": "Corea del sur",
                        "equipoB": "Ghana",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Portugal-Uruguay",
                        "equipoA": "Portugal",
                        "equipoB": "Uruguay",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Ghana-Uruguay",
                        "equipoA": "Ghana",
                        "equipoB": "Uruguay",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Corea del sur-Portugal",
                        "equipoA": "Corea del sur",
                        "equipoB": "Portugal",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            }
        ],
        "octavos": {
            "2-b": "Estados Unidos",
            "1-a": "Ecuador",
            "1-c": "Argentina",
            "2-a": "Ecuador",
            "2-h": "Ghana",
            "1-g": "Serbia",
            "1-b": "Estados Unidos",
            "2-e": "España",
            "2-g": "Camerún",
            "1-f": "Canadá",
            "2-d": "Francia",
            "2-f": "Marruecos",
            "1-h": "Portugal",
            "2-c": "Arabia Saudita",
            "1-e": "España",
            "1-d": "Francia"
        },
        "torneo": {
            "cuartos-d-2": "Camerún",
            "cuartos-c-2": "Francia",
            "cuartos-d-1": "Japon",
            "semifinal-b-1": "Estados Unidos",
            "semifinal-b-2": "Camerún",
            "tercero": "España",
            "final-a": "Ecuador",
            "cuartos-a-1": "Ecuador",
            "cuartos-b-1": "España",
            "campeon": "Estados Unidos",
            "semifinal-a-2": "España",
            "cuartos-c-1": "Estados Unidos",
            "final-b": "Estados Unidos",
            "cuartos-a-2": "Francia",
            "semifinal-a-1": "Ecuador",
            "cuartos-b-2": "Serbia"
        }
    }

    const superProde = {
        "resultados": [
            {
                "nombre": "A",
                "partidos": [
                    {
                        "partidoid": "A-Senegal-Paises bajos",
                        "equipoA": "Senegal",
                        "equipoB": "Paises bajos",
                        "golesequipoA": 1,
                        "golesequipoB": 1
                    },
                    {
                        "partidoid": "A-Catar-Ecuador",
                        "equipoA": "Catar",
                        "equipoB": "Ecuador",
                        "golesequipoA": 1,
                        "golesequipoB": 2
                    },
                    {
                        "partidoid": "A-Catar-Senegal",
                        "equipoA": "Catar",
                        "equipoB": "Senegal",
                        "golesequipoA": 2,
                        "golesequipoB": 1
                    },
                    {
                        "partidoid": "A-Paises bajos-Ecuador",
                        "equipoA": "Paises bajos",
                        "equipoB": "Ecuador",
                        "golesequipoA": 1,
                        "golesequipoB": 3
                    },
                    {
                        "partidoid": "A-Ecuador-Senegal",
                        "equipoA": "Ecuador",
                        "equipoB": "Senegal",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "A-Paises bajos-Catar",
                        "equipoA": "Paises bajos",
                        "equipoB": "Catar",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "B",
                "partidos": [
                    {
                        "partidoid": "B-Inglaterra-Irán",
                        "equipoA": "Inglaterra",
                        "equipoB": "Irán",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Estados Unidos-Gales",
                        "equipoA": "Estados Unidos",
                        "equipoB": "Gales",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Gales-Irán",
                        "equipoA": "Gales",
                        "equipoB": "Irán",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Inglaterra-Estados Unidos",
                        "equipoA": "Inglaterra",
                        "equipoB": "Estados Unidos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Gales-Inglaterra",
                        "equipoA": "Gales",
                        "equipoB": "Inglaterra",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "B-Irán-Estados Unidos",
                        "equipoA": "Irán",
                        "equipoB": "Estados Unidos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "C",
                "partidos": [
                    {
                        "partidoid": "C-Argentina-Arabia Saudita",
                        "equipoA": "Argentina",
                        "equipoB": "Arabia Saudita",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-México-Polonia",
                        "equipoA": "México",
                        "equipoB": "Polonia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Polonia-Arabia Saudita",
                        "equipoA": "Polonia",
                        "equipoB": "Arabia Saudita",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Argentina-México",
                        "equipoA": "Argentina",
                        "equipoB": "México",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Polonia-Argentina",
                        "equipoA": "Polonia",
                        "equipoB": "Argentina",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "C-Arabia Saudita-México",
                        "equipoA": "Arabia Saudita",
                        "equipoB": "México",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "D",
                "partidos": [
                    {
                        "partidoid": "D-Dinamarca-Túnez",
                        "equipoA": "Dinamarca",
                        "equipoB": "Túnez",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Francia-Australia",
                        "equipoA": "Francia",
                        "equipoB": "Australia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Túnez-Australia",
                        "equipoA": "Túnez",
                        "equipoB": "Australia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Francia-Dinamarca",
                        "equipoA": "Francia",
                        "equipoB": "Dinamarca",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Australia-Dinamarca",
                        "equipoA": "Australia",
                        "equipoB": "Dinamarca",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "D-Túnez-Francia",
                        "equipoA": "Túnez",
                        "equipoB": "Francia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "E",
                "partidos": [
                    {
                        "partidoid": "E-Alemania-Japón",
                        "equipoA": "Alemania",
                        "equipoB": "Japón",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-España-Costa Rica",
                        "equipoA": "España",
                        "equipoB": "Costa Rica",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-Japón-Costa Rica",
                        "equipoA": "Japón",
                        "equipoB": "Costa Rica",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-España-Alemania",
                        "equipoA": "España",
                        "equipoB": "Alemania",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-Japón-España",
                        "equipoA": "Japón",
                        "equipoB": "España",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "E-Costa Rica-Alemania",
                        "equipoA": "Costa Rica",
                        "equipoB": "Alemania",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "F",
                "partidos": [
                    {
                        "partidoid": "F-Marruecos-Croacia",
                        "equipoA": "Marruecos",
                        "equipoB": "Croacia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Bélgica-Canadá",
                        "equipoA": "Bélgica",
                        "equipoB": "Canadá",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Bélgica-Marruecos",
                        "equipoA": "Bélgica",
                        "equipoB": "Marruecos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Croacia-Canadá",
                        "equipoA": "Croacia",
                        "equipoB": "Canadá",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Croacia-Bélgica",
                        "equipoA": "Croacia",
                        "equipoB": "Bélgica",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "F-Canadá-Marruecos",
                        "equipoA": "Canadá",
                        "equipoB": "Marruecos",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "G",
                "partidos": [
                    {
                        "partidoid": "G-Suiza-Camerún",
                        "equipoA": "Suiza",
                        "equipoB": "Camerún",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Brasil-Serbia",
                        "equipoA": "Brasil",
                        "equipoB": "Serbia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Camerún-Serbia",
                        "equipoA": "Camerún",
                        "equipoB": "Serbia",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Brasil-Suiza",
                        "equipoA": "Brasil",
                        "equipoB": "Suiza",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Serbia-Suiza",
                        "equipoA": "Serbia",
                        "equipoB": "Suiza",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "G-Camerún-Brasil",
                        "equipoA": "Camerún",
                        "equipoB": "Brasil",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            },
            {
                "nombre": "H",
                "partidos": [
                    {
                        "partidoid": "H-Uruguay-Corea del sur",
                        "equipoA": "Uruguay",
                        "equipoB": "Corea del sur",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Portugal-Ghana",
                        "equipoA": "Portugal",
                        "equipoB": "Ghana",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Corea del sur-Ghana",
                        "equipoA": "Corea del sur",
                        "equipoB": "Ghana",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Portugal-Uruguay",
                        "equipoA": "Portugal",
                        "equipoB": "Uruguay",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Ghana-Uruguay",
                        "equipoA": "Ghana",
                        "equipoB": "Uruguay",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    },
                    {
                        "partidoid": "H-Corea del sur-Portugal",
                        "equipoA": "Corea del sur",
                        "equipoB": "Portugal",
                        "golesequipoA": 0,
                        "golesequipoB": 0
                    }
                ]
            }
        ],
        "octavos": {
            "2-b": "Estados Unidos",
            "1-a": "Ecuador",
            "1-c": "Argentina",
            "2-a": "Ecuador",
            "2-h": "Ghana",
            "1-g": "Serbia",
            "1-b": "Estados Unidos",
            "2-e": "España",
            "2-g": "Camerún",
            "1-f": "Canadá",
            "2-d": "Francia",
            "2-f": "Marruecos",
            "1-h": "Portugal",
            "2-c": "Arabia Saudita",
            "1-e": "España",
            "1-d": "Francia"
        },
        "torneo": {
            "cuartos-d-2": "Brasil",
            "cuartos-c-2": "Francia",
            "cuartos-d-1": "España",
            "semifinal-b-1": "Estados Unidos",
            "semifinal-b-2": "Camerún",
            "tercero": "España",
            "final-a": "Ecuador",
            "cuartos-a-1": "Ecuador",
            "cuartos-b-1": "Argentina",
            "campeon": "Estados Unidos",
            "semifinal-a-2": "España",
            "cuartos-c-1": "Estados Unidos",
            "final-b": "Estados Unidos",
            "cuartos-a-2": "Francia",
            "semifinal-a-1": "Ecuador",
            "cuartos-b-2": "Mexico"
        }
    }
    
    test('lista equipos devuelve un array', () => {
        const listaEquipos = obtenerListaEquipos(prode, etapa.CUARTOS)
        console.log(listaEquipos)
    })

    test.only('deuvleve objeto puntaje del torneo en la etapa dada', () => {
        const puntosTorneo = calcularPuntosTorneo(prode, superProde, etapa.CUARTOS)
        console.log(puntosTorneo);
    })
})