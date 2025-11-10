import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";

    export class Guerrero extends Personaje{
        #arma;
        #vida;
        constructor(nombre="", edad=0, vivo=true, casa=null, arma=null, vida=100){
            super(nombre, edad, vivo, casa);
            if(arma instanceof Arma){
                this.#arma=arma;
            }else{
                this.#arma=null;
                console.log("Error, no es una instancia de arma");
            }

            this.#vida=vida;
        }
        set setArma (arma){
            if(arma instanceof (Arma)){
                this.#arma=arma;
                console.log(this.getNombre + " ha equipado el arma "+this.#arma.getNombre);
            }else{
                console.log("ERROR AL INTRODUCIR EL ARMA, NO ES UNA INSTANCIA DE ARMA");
            }

        }

        get getArma(){
            return this.#arma;
        }

        luchar(){
            console.log(this.getNombre + " ataca con su " + this.#arma.getNombre + ","+" causando "+this.#arma.getDanio + " puntos");
        }

        entrenar(){
            console.log(this.getNombre + " entrena con su arma "+this.#arma.getNombre);
        }
        
        //NUEVO V3
        atacar(objetivo){
            const danio = Math.floor(this.#arma.getDanio * (0.7 + Math.random() * 0.6));
            console.log(this.getNombre + " ataca con su " + this.#arma.getNombre + ","+" causando "+danio + " puntos");
            objetivo.recibirDanio(danio);
        }

        recibirDanio(puntos){
            this.#vida -= puntos;
            if(this.#vida<=0){
                this.#vida=0;
                this.morir();
            }
        }

    }