import { Pipe, PipeTransform } from '@angular/core';
import {Utils} from '../utils';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(mainArray: any[], searchText: string): any[] {
    return Utils.filterArrayByString(mainArray, searchText);
  }

}
