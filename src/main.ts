import './style.css'
//import { setupCounter } from './counter.ts'
import { enviromentsComponents } from './concepts/01-eviroments'

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

enviromentsComponents(elements);
