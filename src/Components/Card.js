import React from "react"
import "../styles/Card.css"
import '../styles/inputs.css';

function Card({ tipo }) {

    var srcPoke;
    switch (tipo.tipo) {

        case "bug":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif"

            break
        case "dark":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif"

            break
        case "dragon":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif"

            break
        case "electric":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"

            break
        case "fairy":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif"

            break
        case "fighting":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif"

            break
        case "fire":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"

            break
        case "flying":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif"

            break
        case "ghost":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"

            break
        case "grass":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"

            break
        case "ground":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif"

            break
        case "ice":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/mamoswine.gif"

            break
        case "normal":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif"

            break
        case "poison":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"

            break
        case "psychic":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif"

            break
        case "rock":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif"

            break
        case "steel":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/aggron.gif"

            break
        case "water":
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"

            break
        default:
            srcPoke = "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"



    }


    var poke = <img className="poke" src={srcPoke} height="100px" alt={tipo.tipo} />;


    return (




        <div className="containerCard">
            <div className="card">
                <div className="contCard">{poke}</div>

                <form>

                    <h1 className="titulo">Bem vindo treinador!</h1>

                    <div className="form__group">
                        <input type="input" className="form__field required" placeholder="Login" name="login" id='login' required />
                        <label for="login" className="form__label">Login</label>


                    </div>
                    <div className="form__group">
                        <input type="password" className="form__field required" placeholder="Senha" name="senha" id='senha' required />
                        <label for="senha" className="form__label">Senha</label>


                    </div>


                    <button className="btn login">Login</button>
                    

                </form>
                

            </div>


        </div>




    )




}






export default Card;
