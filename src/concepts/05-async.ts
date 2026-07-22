import { heroes } from "./data/heroes";
import type { asynCompInterface, findHero } from "./interfaces/asyncInterface";

export const asyncComponent:asynCompInterface = (element:HTMLElement) =>{
//console.log('asyncComponent');
let id = "5d86371fd55e2e2a30fe1ccb2";
const hero = findHero(id);
//console.log(hero);
console.log(id);
//el tiempo de ejecucion es asincrono por lo que esto se queda pendiente hasta que se resuelva la promesa
hero.then(name => element.innerHTML = name)
    .catch(error => element.innerHTML = error);
    console.log("fin del componente")
}

const findHero:findHero =async(id:string) => {
 //heroes.   
 const hero = heroes.find(hero => hero.id === id);
 //si no se encuentra el heroe se lanza un error
 if(!hero) throw new Error(`hero with id ${id} not found`);
 //solo tener cuidado con el return ya que  no mandamos nada regresa  undefiend
 return hero.name ;
}