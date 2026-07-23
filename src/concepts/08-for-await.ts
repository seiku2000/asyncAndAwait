import { heroes } from './data/heroes';
import type { getHeroesAsycInterface, forAwaitInterface, getHeroAsyncInterface } from './interfaces/for-awaitInterface';

export const forAwaitComponent:forAwaitInterface = async( element:HTMLElement ) => {

const id = "5d86371fd55e2e2a30fe1cc4";

//const hero = await getHeroAsync(id);
//element.innerHTML = hero.name;
//console.log(hero);

/*
if(await getHeroAsync(id)) {
 element.innerHTML = "Hero found";   
 return;
}

element.innerHTML = "heroe no existe"
*/

const heroIds = heroes.map( hero => hero.id);
const heroPromises = getHeroesAsync(heroIds);
//console.log(heroIds);
//console.log(heroPromises);
//await Promise.all(heroPromises); similar a for await pero ejecuta todas las promesas al mismo tiempo
for await (const hero of heroPromises){
    element.innerHTML += `<p>${hero.name}</p>`;

}

}


const getHeroesAsync:getHeroesAsycInterface = ( heroIds: string[] ) => {
    
    const heroPromises: Promise<any>[] = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync:getHeroAsyncInterface = async(id: string) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(id), 1000)
    });

    return heroes.find( hero => hero.id === id );
}