import { Arma } from "./Arma.js";
import { Casa } from "./Casa.js";
export class Personaje{
    #nombre;
    #edad;
    #vivo;
    #casa;

    constructor(nombre="", edad=0, vivo=true, casa=null){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#vivo=vivo;
        if(casa instanceof Casa){
            this.#casa=casa;
        }else{
            this.casa = null;
            console.log("Error, no es una instancia de casa");
        }

    }

    get getNombre() {
        return this.#nombre;
    }
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getEdad() {
        return this.#edad;
    }
    set setEdad(edad) {
        this.#edad =edad;
    }

    get getVivo() {
        return this.#vivo;
    }
    set setVivo(valor) {
        this.#vivo = valor;
    }

    get getCasa() {
        return this.#casa;
    }
    set setCasa(casa) {
        if(casa instanceof Casa){
            this.#casa=casa;
        }else{
            console.log("Error, no es una instancia de casa");
        }
    }

    //METODOS
    
    presentarse(){
        console.log("Soy "+this.#nombre+ " de la casa " + this.#casa.getNombre);
    }

    morir(){
        this.#vivo=false;
        console.log(this.#nombre + " ha muerto");
    }



}