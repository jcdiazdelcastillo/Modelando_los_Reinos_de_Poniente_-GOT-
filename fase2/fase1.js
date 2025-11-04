import { Personaje } from "./Personaje.js";
import { Casa } from "./Casa.js";
import { Arma } from "./Arma.js";
import { Reino} from "./Reino.js";

//CREAR ARMAS
const aguja = new Arma("Aguja", 15, "Daga");
const garra = new Arma("Garra", 25, "Espada");

// CREAR CASAS

const casaStark = new Casa("Stark", "Se acerca el invierno");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

//CREAR PERSONAKES
const jaime = new  Personaje("Jaime Lannister", 40, true, casaLannister);
const arya = new Personaje("Arya Stark", 18, true, casaStark);
const jon = new Personaje("Jon Snow", 25, true, casaStark);

//CREAR REINOS
const poniente = new Reino("Poniente", jaime);
poniente.agregarCasas(casaStark);
poniente.agregarCasas(casaLannister);

//EQUIPAR ARMAS
jon.equiparArma(garra);
arya.equiparArma(aguja);

//AÑADIR PERSONAKES A CASAS
casaStark.agregarPersonajeCasa(jon);
casaStark.agregarPersonajeCasa(arya);
casaLannister.agregarPersonajeCasa(jaime);

//PROCLAMAR REY DE PONIENTE
poniente.setRey = jaime;

//listar casas de Poniente
console.log("Casas del Reino de " + poniente.getNombre);
poniente.listarCasas();

//rey actual
console.log("Rey actual: ");
poniente.infoReyActual();

//miembros de la casa stark

console.log("Miembros de la casa Stark: ");
casaStark.miembrosCasa();

//Presentaciones
jon.presentarse();
arya.presentarse();
jaime.presentarse();

//info armas
garra.descripcion();
aguja.descripcion();