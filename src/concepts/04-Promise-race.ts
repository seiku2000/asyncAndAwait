import type { fastPromiseInterface, mediumPromiseInterface, PromiseRace, RenderValue, slowPromiseInterface } from "./interfaces/PromiseRace";

export const promiseRaceComponent:PromiseRace = (elments:HTMLElement) => {
    //console.log('promiseRaceCOmponet')
    elments.innerHTML = 'Loading....';

    const renderValue:RenderValue = (value:string)  => {
        elments.innerHTML = value;
    }

    //esto de una manera assincrona 
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then((value) => {
        renderValue(value as string);
    });

    
}


    const slowPromise:slowPromiseInterface = () => new Promise<unknown>(resolve => {
        setTimeout(() => {
            resolve('slow Promise');
        },2000);
    })

    const mediumPromise:mediumPromiseInterface =() => new Promise<unknown>(resolve => {
        setTimeout(() => {
            resolve('medium Promise');
        },1000);
    });

    const fastPromise:fastPromiseInterface = () => new Promise<unknown>(resolve => {
        setTimeout(() => {
            resolve('fast Promise');
        },500);
    });

    
    