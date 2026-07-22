import type { Heroe } from "../data/heroeInterface"


export interface asynCompInterface {
    (element:HTMLElement): void
}
export interface findHero {
    (id:string):Promise<string> | undefined
}