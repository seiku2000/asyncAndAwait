import { heroes } from "./data/heroes";
import type { generatorAsyncInterface } from "./interfaces/generatorAsyncInterface";

export const generatorAsyncComponent: generatorAsyncInterface = async(element: HTMLElement) => {
console.log("generator componenetasync")
const heroGenerator = getHeroGenerator();
let isfinished = false

do {
    const {value,done } = await heroGenerator.next();
     element.innerHTML = value as string;
     isfinished = done;
     console.log(value, done);

   
}while(!isfinished)



}

//podemos trabajar con cualquier ciclo con las funciones generadoras
async function* getHeroGenerator(): AsyncGenerator<string, string, undefined> {
    for(const hero of heroes) {
        await sleep();
        yield hero.name;
    }
    return "ya no hay nada"

}

const sleep = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    })
}


