import { heroes } from "./data/heroes";
import type { callBackInterface } from "./interfaces/callbackInterface";

export const CallbackComponent = (element: HTMLDivElement) => {
    let id= "5d86371f1efebc31def272e2";
  //  console.log('CallbackComponent');


    findHero(id, (IroMan) =>{
        console.log(IroMan);
        element.innerHTML = IroMan?.name;
    })
}

const findHero:callBackInterface = (id:string,callback)=>{
    const heroe =heroes.find(heroe => heroe.id === id);
    callback(heroe)

}