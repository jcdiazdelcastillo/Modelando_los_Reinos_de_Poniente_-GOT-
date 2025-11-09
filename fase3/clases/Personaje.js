import { Arma } from "./Arma.js";
export class Personaje{
    #nombre;
    #edad;
    #vivo;
    #casa;

    constructor(nombre="", edad=0, vivo=true, casa="", arma=""){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#vivo=vivo;
        this.#casa=casa;
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
        this.#casa = casa;
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