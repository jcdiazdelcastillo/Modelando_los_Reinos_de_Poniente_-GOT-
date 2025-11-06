import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";

    export class Guerrero extends Personaje{
        #arma;
        constructor(nombre="", edad=0, vivo=true, casa="", arma=""){
            super(nombre, edad, vivo, casa);
            this.#arma=arma;
        }
        set setArma (arma){
            this.#arma=arma;
        }

        get getArma(){
            return this.#arma;
        }

        equiparArma(arma){
            if(arma instanceof Arma){
                this.#arma=arma;
                console.log(this.getNombre + " ha equipado el arma "+this.#arma.getNombre);
            }else console.log("ERROR AL INTRODUCIR EL ARMA, NO ES UNA INSTANCIA DE ARMA");
        }

        luchar(){
            console.log(this.getNombre + " ataca con su " + this.#arma.getNombre + ","+" causando "+this.#arma.getDanio + " puntos");
        }

        entrenar(){
            console.log(this.getNombre + " entrena con su arma "+this.#arma.getNombre);
        }

    }