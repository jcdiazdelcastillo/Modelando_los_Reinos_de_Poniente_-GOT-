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
        
        if (casaA instanceof Casa && casaB instanceof Casa){
           let guerrerosCA = casaA.obtenerGuerreros();
           let guerrerosCB = casaB.obtenerGuerreros();

           console.log("Los guerreros que pelearán en la casa "+casaA.getNombre +" serán los siguientes: \n"+guerrerosCA);
           console.log("Los guerreros que pelearán en la casa "+casaB.getNombre +" serán los siguientes: "+guerrerosCB);

           let turnoCA=this.decidirComienzoBatalla(guerrerosCA, guerrerosCB);

           let countCA = 0;
           let countCB = 0;
           while(countCA < guerrerosCA.length && countCB<guerrerosCB.length){
                let guerreroA = guerrerosCA[countCA];
                let guerreroB = guerrerosCB[countCB];

                console.log("Nuevo enfrentamiento: "+guerreroA.getNombre +" vs "+guerreroB.getNombre);
                if(turnoCA){
                    let muerto=this.procesarAtaque(guerreroA, guerreroB) //GUERRERO A ATACA A GUERRERO B
                    if(muerto){ //Si guerrero B muere, avanza al siguiente guerrero
                        countCB++;
                    }else{ //Si guerrero B no muere, ataca a guerreroA
                        muerto=this.procesarAtaque(guerreroB, guerreroA);
                        if(muerto){ //Si guerrero A muere, avanza al siguiente guerrero
                            countCA++;
                        }
                    }
                }else{
                    muerto = procesarAtaque(guerreroB, guerreroA); //si el random de decidirBatalla ha salido que es mayor a 0.5, empieza atazando la casaB
                    if(muerto){//Si el guerrero A muere, avanza al siguiente guerrero
                        countCA++;
                    }else{//Si guerrero A no muere, ataca a guerreroB
                        muerto= procesarAtaque(guerreroA, guerreroB); 
                        if (muerto){ //Si guerrero B muere, avanza al siguiente guerrero
                            countCB++;
                        }
                    }
                }
           }
        }else{
            console.log("No se puede batallar, no son casas");
        }
    }

    procesarAtaque(atacante, defensor){
        atacante.atacar(defensor);
        if(!defensor.getVivo){
            this.#guerrerosMuertos.push(defensor);
            return true; //si ha muerto devuelve true
        }
        return false; // devuelve false si sigue vivo
    }

    mostrarGuerrerosMuertosEnCombate(){
        if(this.#guerrerosMuertos.length==0){
            return "No hay guerreros muertos"
        }else{
            return this.#guerrerosMuertos;
        }
    }

}