import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string) {
    let arr = value.split(" ");
    let newArr = [];
    for (let word of arr) {
      let newWordArr = [];
      let oldWord = word.split("");
      for (let letter of oldWord) {
        if (!/^[a-zA-Z]+$/.test(letter)) continue;
        newWordArr.push(letter.toLowerCase())
      }
      if (newWordArr[0]) newWordArr[0] = newWordArr[0].toUpperCase();
      newArr.push(newWordArr.join(''))
    }
    return newArr.join(" ");
  }

}
