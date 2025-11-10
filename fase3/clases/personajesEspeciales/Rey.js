import { Personaje } from "../Personaje.js";

export class Rey extends Personaje{
    #aniosReinado;

    constructor(nombre="", edad=0, vivo=true, casa=null, aniosReinado=0){
        super(nombre, edad, vivo, casa);
        this.#aniosReinado=aniosReinado;
    }

    set setAniosReinado(aniosReinado){
        this.#aniosReinado=aniosReinado;
    }

    get getAniosReinado(){
        return this.#aniosReinado;
    }

    luchar(){
        console.log(this.getNombre + " que es Rey, ataca con su poder");
    }

    gobernar(){
        console.log(this.getNombre +"gobierna con sabiduría desde hace "+this.#aniosReinado+" años");
    }
}