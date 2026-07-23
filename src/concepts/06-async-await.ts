import { heroes } from "./data/heroes";
import type { asyncAwaitInterface, findHeroAsync } from "./interfaces/async-await";

export const asyncAwaitComponet:asyncAwaitInterface = async(element: HTMLElement) => {
console.log('asyncAwaitComponet');

let id1 = '5d86371fd55e2e2a30fe1cc3';
let id2 = '5d86371fd55e2e2a30fe1cc4';

/*
const hero1 = await findHero(id1); 
const hero2 = await findHero(id2);
element.innerHTML  = `${hero1.name}/${hero2.name}`;*/

try {
    //otra forma de difinir variables con desestructuración
const {name:name1} = await findHero(id1); 
const {name:name2} = await findHero(id2);
element.innerHTML  = `${name1}/${name2}`;
    
} catch (error) {
    element.innerHTML = error;
    
}




};
//otra manera definir funciones asincronas con async
/*
async function miFuncion() {

}*/

const findHero:findHeroAsync = async(id:string) => {
    const hero = heroes.find( hero => hero.id === id);
    if(!hero)
        throw new Error(`hero with id ${id} not found `);

    return hero;
}