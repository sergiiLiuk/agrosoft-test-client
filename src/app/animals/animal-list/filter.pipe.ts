import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../animal.model';

@Pipe({
  name: 'animalsFilter',
})
export class FilterPipe implements PipeTransform {
  transform(animals: Animal[] | null, filterText: string) {
    if (!animals) return [];
    else if (animals.length === 0 || filterText === '') {
      return animals;
    } else {
      let findValue = (
        animals: Animal[],
        filterText: string
      ): Animal[] | null => {
        for (let obj of animals) {
          if (
            obj.animalNumber?.toLocaleLowerCase() ===
            filterText.toLocaleLowerCase()
          ) {
            return [
              {
                animalNumber: obj.animalNumber,
                gender: obj.gender,
                children: [],
              },
            ];
          }
          if (obj.children) {
            let result: Animal[] | null = findValue(obj.children, filterText);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };
      return findValue(animals, filterText);
    }
  }
}
