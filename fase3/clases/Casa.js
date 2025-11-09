import { Personaje } from "./Personaje.js";
import { Guerrero } from "./personajesEspeciales/Guerrero.js";
export class Casa{
    #nombre;
    #lema;
    #miembros;

    constructor(nombre="", lema="", miembros=[]){
        this.#nombre=nombre;
        this.#lema=lema;
        this.#miembros=miembros;
    }

    set setNombre(nombre){
        this.#nombre=nombre;
    }
    get getNombre(){
        return this.#nombre;
    }

    set setLema(lema){
        this.#lema=lema;
    }

    get getLema(){
        return this.#lema;
    }

    get getMiembros(){
        return this.#miembros;
    }


    //MÉTODOS

    agregarPersonajeCasa(personaje){
        if(personaje instanceof Personaje){
            this.#miembros.push(personaje);
            console.log(personaje.getNombre + " ha sido añadido a la casa "+this.#nombre);
        }else{
            console.log("Error - No se ha podido añadir el personaje. INSTANCIA INCORRECTA DE PERSONAJE");
        }
    }

    miembrosCasa(){
        console.log("Miembros de la casa " + this.#nombre);
        this.#miembros.forEach(miembro=>{
            console.log(" - "+miembro.getNombre);
        });
    }

    //NUEVO V3
    obtenerGuerreros(){
        let arrGuerreros=[];
        this.#miembros.forEach(miembro => {
            if(miembro instanceof Guerrero){
                arrGuerreros.push(miembro);
            }
        });
        return arrGuerreros;
    }
}