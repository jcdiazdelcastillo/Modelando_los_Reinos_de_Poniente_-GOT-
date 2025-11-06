export class Arma{
    #nombre;
    #danio;
    #tipo;

    constructor(nombre="", danio=0, tipo=""){
        this.#nombre=nombre;
        this.#danio=danio;
        this.#tipo=tipo;
    }

    set setNombre(nombre){
        this.#nombre=nombre;
    }

    get getNombre(){
        return this.#nombre;
    }

    set setDanio(danio){
        this.#danio=danio;
    }

    get getDanio(){
        return this.#danio;
    }

    set setTipo(tipo){
        this.#tipo=tipo;
    }

    get getTipo(){
        return this.#tipo;
    }

    //-------METODOS-------

    descripcion(){
        console.log(this.#nombre + "(."+ this.#tipo +")" + " - daño: "+this.#danio);
    }







    
}