import { Guerrero } from "./clases/personajesEspeciales/Guerrero.js";
import { Consejero } from "./clases/personajesEspeciales/Consejero.js";
import { Rey } from "./clases/personajesEspeciales/Rey.js";
import { Arma } from "./clases/Arma.js";
import { Casa } from "./clases/Casa.js";


//CREAR ARMAS
const garra = new Arma("Garra", 25, "Espada");

// CREAR CASAS

const casaStark = new Casa("Stark", "Se acerca el invierno");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

//CREAR PERSONAKES
const jon = new  Guerrero("Jon Snow", 40, true, casaStark);
const tyron = new Consejero("Tyrion Lannister", 18, true, casaLannister, "ataques");
const robert = new Rey("Robert Baratheon", 25, true, casaLannister, 7);

jon.presentarse();
jon.equiparArma(garra);
jon.luchar();
jon.entrenar();

tyron.presentarse();
tyron.luchar();
tyron.aconsejar();

robert.presentarse();
robert.gobernar();
robert.luchar();
/*
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
aguja.descripcion();*/