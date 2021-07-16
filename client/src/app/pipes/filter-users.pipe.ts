import { Pipe, PipeTransform } from '@angular/core';
import { Woman } from '../models/models';

@Pipe({
  name: 'filteredServers',
})
export class FilteredServersPipe implements PipeTransform {
  transform(value: Array<Woman>, str: string) {
    console.log('STR : ', str);
    if (str == '') return value;

    let arr = value.filter((item) => item.WomanName.includes(str));
    console.log('ARR : ', arr);
    return arr;
  }
}
