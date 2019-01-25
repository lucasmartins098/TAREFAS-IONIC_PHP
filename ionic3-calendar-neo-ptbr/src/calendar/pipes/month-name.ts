import {Pipe} from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class monthName {
  transform(value, args) {
    var monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
    return monthNames[value - 1];
  }
}
