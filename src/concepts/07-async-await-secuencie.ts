import type { fastPromiseInterface, mediumPromiseInterface, slowPromiseInterface } from "./interfaces/PromiseRace";

export const asyncAwaitSecuencie = async (element: HTMLElement) => {
    console.log('asyncAwaitSecuencie');

    console.time("start");
    /*
    const value1 = await slowPromise();
    const value2 = await mediumPromise();
    const value3 = await fastPromise();*/
    //espera cada una se resuelve al mismo tiempo
    const [value1,value2,value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    
    console.log(value1, value2, value3);

    element.innerHTML =`
    <p>${value1}</p>
    <p>${value2}</p>
    <p>${value3}</p>
    `;
    console.timeEnd("start");
    
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