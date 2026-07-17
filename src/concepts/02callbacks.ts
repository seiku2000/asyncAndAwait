import { heroes } from "./data/heroes";
import type { callBackInterface } from "./interfaces/callbackInterface";

export const CallbackComponent = (element: HTMLDivElement) => {
    let id= "5d86371f1efebc31def272e2";
  //  console.log('CallbackComponent');

  //implemantado callback
    findHero(id, (errorMessage,IroMan) =>{
        if(errorMessage){
            element.innerHTML = errorMessage;
            return
        }

       // console.log(IroMan);
        element.innerHTML = IroMan.name;
        
       // element.innerHTML = IroMan?.name || "hero no encontrado";
    })
}
//callback implementation
const findHero:callBackInterface = (id:string,callback)=>{
  
    const heroe =heroes.find(heroe => heroe.id === id);
    
    if(!heroe){
        callback(`heroe no encontrad con el id${id}`)
        return
    }
    callback(null, heroe)

}

