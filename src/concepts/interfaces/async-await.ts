import type { Heroe } from "../data/heroeInterface";

export interface  asyncAwaitInterface {
    (element: HTMLElement): void;
}


export interface findHeroAsync {
    (id:string):Promise<Heroe>
}