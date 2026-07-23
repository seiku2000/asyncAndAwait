import type { Heroe } from "../data/heroeInterface";

export interface forAwaitInterface {
    (element:HTMLElement): void
}


export interface getHeroesAsycInterface {
    (heroIds: string[]): Promise<any>[]
}

export interface getHeroAsyncInterface {
    (id: string): Promise<Heroe>
}

