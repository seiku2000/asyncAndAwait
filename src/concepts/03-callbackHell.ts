import { heroes } from "./data/heroes";
import type { callBackHellInterface } from "./interfaces/callbackHell";

export const CallbackHell = (element: HTMLDivElement) => {
    let id= "5d86371f1efebc31def272e2";
    let id2 = "5d86371f25a058e5b1c8a65e";
  //  console.log('CallbackComponent');

  //implemantado callback
    findHero(id, (errorMessage,heroe1) =>{
        if(errorMessage){
            element.innerHTML = errorMessage;
            return
        }
        //? evitar este tipo de llamados
        findHero(id2 , (errorMessage,heroe2 )=>{
            if(errorMessage){
                element.innerHTML = errorMessage;
                return
            }
            element.innerHTML = `${heroe1.name} y  ${heroe2.name}`

        });

       
     
    })
}
//callback implementation
const findHero:callBackHellInterface = (id:string,callback)=>{
  
    const heroe =heroes.find(heroe => heroe.id === id);
    
    if(!heroe){
        callback(`heroe no encontrad con el id${id}`)
        return
    }
    callback(null, heroe)

}

