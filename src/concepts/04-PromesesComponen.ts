import type { Heroe } from "./data/heroeInterface";
import { heroes } from "./data/heroes";
import type { FindHero, promiseComponent, renderError, renderHero, renderTwoHeroInterface } from "./interfaces/promessaInterface";




export const PromisesComponent:promiseComponent = (element: HTMLElement) => {
    console.log('PromisesComponent');
    let id1 = '5d86371f97c29d020f1e1f6d';
    let id2 = '5d86371fd55e2e2a30fe1ccb';

        const renderError:renderError = (error:string) =>{
        element.innerHTML =`<h1 style="color: red; 
        line-height: 1.2;
        "><br>Erorr:${error}<br></h1>`
    }

    const renderTwoHeroes:renderTwoHeroInterface = (hero1:Heroe,heroe2:Heroe) => {
        element.innerHTML = `${hero1.name} /  ${heroe2.name}`;
    }

    const renderHero:renderHero = (hero:Heroe) =>{
        element.innerHTML = hero.name;

    }

    /*

    //promesa normal 
    findHero(id1)
    .then((hero:Heroe) => renderHero(hero))
    .catch(erorr =>renderError(erorr));*/
    let  hero1:Heroe;
    let  hero2:Heroe; 


    //promesas hell o anidadas
    /*
    //Forma de promesa 1

    findHero(id1)
    .then((hero1:Heroe) => {
        findHero(id2)
    
        .then((hero:Heroe) => {
            hero2 = hero;
            renderTwoHeroes(hero1,hero2);
        }).catch((erorr:string)  => renderError(erorr))
    }).catch(renderError);
    */
//version corta de promesas y mas legible,limpia
//Promesass ejemplo 2
/*    findHero(id1)
    .then((hero:Heroe) =>{
        hero1 = hero;
        return findHero(id2)
    }).then((hero2:Heroe )=> {
        renderTwoHeroes(hero1,hero2)
    }).catch(renderError);
    */


//Un forma mas eficiente de manejar
    Promise.all([
        findHero(id1),
        findHero(id2),

    ]).then(([hero1,hero2])=> renderTwoHeroes(hero1 as Heroe,hero2 as Heroe))
    .catch(renderError);

}

const findHero:FindHero =(id:string): Promise<Heroe> =>{
   // const hero = heroes.find(heroe => heroe.id === id);

   return new Promise((resolve
    ,reject): Promise<Heroe> => {
        console.log('hey hola mundo');

    const heroe = heroes.find(heroe => heroe.id === id);
    if(heroe){
        resolve(heroe);
        return;
    }
    reject(`identificador ${id} no encontrado`);

   });
   
    
}