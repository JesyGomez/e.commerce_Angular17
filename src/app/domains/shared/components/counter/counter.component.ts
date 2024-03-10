
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
@Input({required: true}) duration = 0;
@Input({required: true}) message = '';
counter = signal(0);
counterRef: number | undefined;

constructor(){
  //NO ASYNC (el constructor se crea para crear valores por defecto, de forma directa y NO debe ser asíncrono, No podemos colocar promesa)
//Before (corre antes de la rederización el contenido de nuestro componente)
  console.log('constructor');
  console.log('-'.repeat(10));
}

ngOnChanges(changes: SimpleChanges){
  //before and during render (este evento se ejecuta antes del render y durante, hace que cada vez que enviemos un cambio el va a estar detectando esos cambios, se corre antes de que el componente sea montado o sea renderizado visualmente)
  console.log('ngOnChanges');
  console.log('-'.repeat(10));
  console.log(changes);
  const duration = changes['duration'];
  if (duration && duration.currentValue !== duration.previousValue){
    this.doSomething();
  }
}

ngOnInit(){
  //after render
  //una vez
  //async, then, subs 
  console.log('ngOnInit');
  console.log('-'.repeat(10));
  console.log('duration =>', this.duration);//imprimimos el estado de duration
  console.log('message => ', this.message);
  this.counterRef = window.setInterval(() => {
    console.log('run interval')
   this.counter.update(statePrev => statePrev + 1);
  }, 1000)
}

ngAfterViewInit(){//corre después el ngOnInit, after render, cuando los hijos de este componente ya fueron renderizados
  //hijos ya fueron pintados(renderizados)
  console.log('ngAfterViewInit');
  console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    //cuando el componentes se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }
  doSomething(){
    console.log('change duration');
    //corre cualquier lógica asyncrona o sincrona
  }

}
