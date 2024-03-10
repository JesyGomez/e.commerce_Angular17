import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
    //como recibimos un string, split volvemos ese split como array, aplicamos reverse (volteamos todas las posiciones) y lo unimos con join
  }

}
