import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {

  transform(array: any[], id: number, property: string): any {
    const foundItem = array.find((item) => {
      if (item !== undefined) {
        return item.id;
      }
      return false;
    });

    if (foundItem) {
      return foundItem[property];
    }
  }

}
