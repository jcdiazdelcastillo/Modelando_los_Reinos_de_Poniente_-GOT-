import { Arma } from "./Arma.js";
export class Personaje{
    #nombre;
    #edad;
    #vivo;
    #casa;
    #arma;

    constructor(nombre="", edad=0, vivo=true, casa="", arma=""){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#vivo=vivo;
        this.#casa=casa;
        this.#arma=arma;
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

    get getArma() {
        return this.#arma;
    }
    set setArma(arma) {
        this.#arma = arma;
    }

    //METODOS
    
    presentarse(){
        console.log("Soy "+this.#nombre+ " de la casa" + this.#casa.getNombre);
    }

    morir(){
        this.#vivo=false;
        console.log("El personaje ha muerto");
    }

    equiparArma(arma){
        if(arma instanceof Arma){
            this.#arma=arma;
            console.log(this.#nombre + " ha equipado el arma "+this.#arma.getNombre);
        }else console.log("ERROR AL INTRODUCIR EL ARMA, NO ES UNA INSTANCIA DE ARMA");
    }

}