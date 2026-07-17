import './style.css'
//import { enviromentsComponents } from './concepts/01-eviroments'
//import { CallbackComponent } from './concepts/02callbacks';
import { CallbackComponent } from './concepts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">

  
</section>

<div class="ticks"></div>

<section id="next-steps">
  
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const elements = document.querySelector<HTMLDivElement>('#center');

CallbackComponent(elements);
