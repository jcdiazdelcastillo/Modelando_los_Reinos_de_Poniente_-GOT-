import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje{
    #especialidad;
    constructor(nombre="", edad=0, vivo=true, casa=null, especialidad=""){
        super(nombre, edad, vivo, casa)
        this.#especialidad=especialidad;
    }

    set setEspecialidad(especialidad){
        this.#especialidad=especialidad;
    }

    get getEspecialidad(){
        return this.#especialidad;
    }

    luchar(){
         console.log(this.getNombre + " no lucha con armas, si no con palabras e inteligencia");
    }

    aconsejar(){
        console.log(this.getNombre+ "aconseja gracias a su especialidad "+this.#especialidad);
    }

}