import { Pipe, PipeTransform } from '@angular/core';
import {Utils} from '../utils';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(mainArray: any[], searchText: string): any[] {
    console.log(mainArray, searchText);
    return Utils.filterArrayByString(mainArray, searchText);
  }

}
