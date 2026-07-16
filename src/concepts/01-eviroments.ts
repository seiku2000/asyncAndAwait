import type { evirimentComponent } from "./interfaces/everimomentsInterfe";

export const enviromentsComponents:evirimentComponent    = (elements:HTMLDivElement) =>{
    
    console.log(import.meta.env);
    const html:string =`
     DEV:${import.meta.env.DEV} </br>
     PROD:${import.meta.env.PROD} </br>
     KEY:${import.meta.env.VITE_API_KEY} </br>
     BASE_URL:${import.meta.env.VITE_BASE_URL} </br>
     
    `;
   

    elements.innerHTML = html;

}