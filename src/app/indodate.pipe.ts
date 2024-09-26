import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indodate'
})
export class IndodatePipe implements PipeTransform {

  transform(value: Date, dateStyle: string=""): unknown {
    return null;
  }

}
