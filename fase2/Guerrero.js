import { Personaje } from "./Personaje.js";
import { Arma } from "./Arma,js";
    export class Guerrero extends Personaje{
        #arma;
        constructor(nombre="", edad=0, vivo=true, casa="", arma=""){
            super(nombre, edad, vivo, casa);
            this.#arma=arma;
        }

        equiparArma(arma){
            if(arma instanceof Arma){
                this.#arma=arma;
                console.log(this.nombre + " ha equipado el arma "+this.arma.getNombre);
            }else console.log("ERROR AL INTRODUCIR EL ARMA, NO ES UNA INSTANCIA DE ARMA");
        }
    }
