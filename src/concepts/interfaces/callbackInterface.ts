import type { Heroe } from "../data/heroeInterface";

export interface callBackInterface {
    //(id?:string, callback?:(heroe:Heroe | undefined) => void):void
    (id:string,callback:(errorMessage:string | null ,heroe?:Heroe )=> void):void
}
