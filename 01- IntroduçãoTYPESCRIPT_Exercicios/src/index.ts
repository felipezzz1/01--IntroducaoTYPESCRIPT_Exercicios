import Adress from "./Adress";
import User, { Sexo } from "./User";

let endereco1 : Adress = new Adress("Rua Xavantes", 666, 85010020, "Vila Carli", "Guarapuava");
let endereco2 : Adress = new Adress("Rua Saldanha Marinho", 777, 84600195, "Vila Carli", "Guarapuava");

let usuario1: User = new User("Felipe", 555555555, 66666666, endereco1);
let usuario2: User = new User("Juvencio", 4544554545, 6556565656, endereco2);

usuario1.sexo = Sexo.MASCULINO;
usuario2.sexo = Sexo.MASCULINO;

console.log(usuario1);
console.log(usuario2);