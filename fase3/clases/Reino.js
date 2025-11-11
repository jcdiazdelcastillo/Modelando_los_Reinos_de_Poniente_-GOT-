import { Personaje } from "./Personaje.js";
import { Casa } from "./Casa.js"; 
export class Reino{

    #nombre;
    #casas;
    #rey;

    constructor(nombre="", rey=null, casas=[]){
        this.#nombre=nombre;
        this.#casas=casas;
        if(rey instanceof Personaje){
            this.#rey=rey;
            console.log(rey.getNombre +  "ha sido proclamado rey de "+this.#nombre);
        }else{
            console.log("Fallo al introducir el rey, no es una instancia de Personaje");
        } 
    }

    set setNombre (nombre){
        this.#nombre=nombre;
    }


    get getNombre (){
        return this.#nombre;
    }

    
    set setCasas (casas){
        this.#casas=casas;
    }

    get getCasas(){
        return this.#casas;
    }

    set setRey(rey){
        if(rey instanceof Personaje){
            this.#rey=rey;
            console.log(rey.getNombre +  "ha sido proclamado rey de "+this.#nombre);
        }else console.log("Fallo al introducir el rey, no es una instancia de Personaje");
    }

    get getRey(){
        return this.#rey;
    }

    //METODOS
    
    agregarCasas(casa){
        if(casa instanceof Casa){
            this.#casas.push(casa);
            console.log("La Casa "+casa.getNombre+" ha sido añadida al Reino de "+this.#nombre);
        }else console.log("Fallo al introducir la casa en el reino. No es una instancia de casa");
    }

    listarCasas(){
        this.#casas.forEach(casa =>{
            console.log(" - Casa "+casa.getNombre);
        });
    }

    infoReyActual(){
        console.log("El rey actual es " + this.#rey.getNombre + " de la casa "+this.#rey.getCasa.getNombre);
    }
}