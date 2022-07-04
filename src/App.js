import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components";
import Fundo from "./Components/Fundo"
import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water } from "./styles/ThemeList";
import GlobalStyle from "./styles/global";
import "./styles/ListaTipo.css";
import Card from "./Components/Card";



const App = () => {



    const [Tipos, setTipos] = useState([]);
    const [Data, setData] = useState('');

    const parentToChild = (tipo) => {
        setData(tipo);

    }

    useEffect(() => {

        setTipos(["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"]);

    }, []);


    var tema;

    switch (Data.tipo) {

        case "bug":
            tema = bug
            break
        case "dark":
            tema = dark
            break
        case "dragon":
            tema = dragon
            break
        case "electric":
            tema = electric
            break
        case "fairy":
            tema = fairy
            break
        case "fighting":
            tema = fighting
            break
        case "fire":
            tema = fire
            break
        case "flying":
            tema = flying
            break
        case "ghost":
            tema = ghost
            break
        case "grass":
            tema = grass
            break
        case "ground":
            tema = ground
            break
        case "ice":
            tema = ice
            break
        case "normal":
            tema = normal
            break
        case "poison":
            tema = poison
            break
        case "psychic":
            tema = psychic
            break
        case "rock":
            tema = rock
            break
        case "steel":
            tema = steel
            break
        case "water":
            tema = water
            break
        default:
            tema = ghost

    }



    return (


        <ThemeProvider theme={tema}>


            <div className="container">



                <ul>
                    {
                        Tipos.map((tipo) => {
                            return (
                                <li key={tipo} > <button className={"tipo "+ tipo} onClick={() => parentToChild({ tipo })}>{tipo} </button></li>
                            )
                        })
                    }

                </ul>

                <Fundo tipo={Data ? Data : "ghost"} />
                <Card tipo={Data ? Data : "ghost"} />

            </div>

            <h1>App 123</h1>
            <GlobalStyle />
        </ThemeProvider>

    )




}






export default App;
