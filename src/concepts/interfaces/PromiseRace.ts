export interface PromiseRace  {
    (elements: HTMLElement): void
}

export interface RenderValue {
    (value: string): void
}

export interface  slowPromiseInterface {
    ():Promise<unknown>

}

export interface mediumPromiseInterface {
       ():Promise<unknown>
}

export interface fastPromiseInterface {
    ():Promise<unknown>
}
