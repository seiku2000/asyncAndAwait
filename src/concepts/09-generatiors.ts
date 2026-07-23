import type { genratorInterface } from "./interfaces/generatorInterface";

export const generatorFunctionsComponent:genratorInterface = (element:HTMLElement) =>{

    const idGen = idGenerator();

    const button = document.createElement('button');
    button.textContent = 'Generar ID';
    button.classList.add('btn', 'btn-primary');
    element.appendChild(button);

    //se hiso como  un contador para que se vea el cambio 
    const renderButton = () =>
    {
        const   { value} = idGen.next();
        button.textContent = `CLick ID: ${value}`;
    }
    button.addEventListener('click' ,renderButton);

    /*
    const genId = idGenerator();
    console.log(genId.next());
    console.log(genId.next());*/
  



   /*
    const myGenerator = myfirstGenerationFunction();
    console.log(myGenerator.next());
    console.log(myGenerator.next());

    
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    
    //si llamamos de nuevo al generador, ya no hay valores
    console.log(myGenerator.next());*/
}

function* idGenerator() {
    let currentId = 0;
    while(true) {
        yield currentId++;
    }
}

//las funciones generadoras son funciones 
// que pueden ser pausadas y reanudadas funcionan como un iterador
function* myfirstGenerationFunction():Generator<string, string, unknown>
{

    //el yield es como un return pero pausa la ejecución
    yield 'primer valor';
    yield 'segundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';
    
    //despues del return ya no hay valores
    return 'ya no hay valores';
}
