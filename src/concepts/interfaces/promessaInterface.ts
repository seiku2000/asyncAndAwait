import type { Heroe } from "../data/heroeInterface";

export interface promiseComponent {
    (element:HTMLElement): void;
}

export interface FindHero {
    (id:string):Promise<Heroe>;
}
export interface renderHero {
    (hero:Heroe):void
}

export interface renderError{
(error:string):void
}

export interface  renderTwoHeroInterface {
    (hero1:Heroe, hero2:Heroe):void
}