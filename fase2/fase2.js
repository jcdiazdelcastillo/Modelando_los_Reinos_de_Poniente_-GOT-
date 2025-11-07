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