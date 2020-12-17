import { Pipe, PipeTransform } from '@angular/core';

//filter.ts
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: string[], searchTerm: string) {
        if (searchTerm) {
            return items.filter(item => item.indexOf(searchTerm) > -1);
        }
        else {
            return items;
        }
    }
}