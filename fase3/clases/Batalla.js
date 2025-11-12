import { Casa } from "./Casa.js";

export class Batalla{
    #guerrerosMuertos;

    constructor (guerrerosMuertos=[]){
        this.#guerrerosMuertos=guerrerosMuertos;
    }

    decidirComienzoBatalla(){
        //hacer un random para ver quien empieza
        let empiezaCA = Math.random(); //coge un número del 0-1
        if(empiezaCA<0.5){ //si el numero que ha generado random es <0.5 (la mitad) empieza Casa A. Si no empieza Casa B
            return true;
        }else{
            return false;
        }
    }

    iniciarBatalla(casaA, casaB){
        console.log("Iniciamos la lucha...");

        if (!(casaA instanceof Casa && casaB instanceof Casa)) {
            console.log("No se puede batallar, no son casas");
        }else{

            const guerrerosA = casaA.obtenerGuerreros();
            const guerrerosB = casaB.obtenerGuerreros();

            console.log("Guerreros de " + casaA.getNombre + ": " + guerrerosA.map(guerrero => guerrero.getNombre));
            console.log("Guerreros de " + casaB.getNombre + ": " + guerrerosB.map(guerrero => guerrero.getNombre));

            while (guerrerosA.length > 0 && guerrerosB.length > 0) {
                let guerreroA = guerrerosA[0];
                let guerreroB = guerrerosB[0];

                console.log("Nuevo enfrentamiento:" + guerreroA.getNombre +" vs "+ guerreroB.getNombre);

                let turnoA = this.decidirComienzoBatalla();

                while (guerreroA.getVivo && guerreroB.getVivo) {
                    if (turnoA) {
                        guerreroA.atacar(guerreroB);
                    } else {
                        guerreroB.atacar(guerreroA);
                    }

                    if (turnoA){ //alterna el turno
                        turnoA = false;
                    }else{
                        turnoA = true;
                    }
                }

                // eliminar del array al que haya muerto
                if (!guerreroA.getVivo) {
                    this.#guerrerosMuertos.push(guerreroA);
                    guerrerosA.shift();
                }
                if (!guerreroB.getVivo) {
                    this.#guerrerosMuertos.push(guerreroB);
                    guerrerosB.shift();
                }
            }
            console.log("Batalla finalizada");
        }
    }

    mostrarGuerrerosMuertosEnCombate(){
        if(this.#guerrerosMuertos.length==0){
            return "No hay guerreros muertos"
        }else{
            return this.#guerrerosMuertos.map(guerrero=>guerrero.getNombre);
        }
    }

}