//recursive function that returns an array
/*Мы определили функцию rangeOfNumbersс двумя параметрами. Функция должна возвращать массив целых чисел, который начинается с числа, представленного параметром, startNumи заканчивается числом, представленным параметром endNum. Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна использовать рекурсию, вызывая саму себя, а не использовать какие-либо циклы. Это также должно работать в случаях, когда оба startNumи endNumодинаковы.
 */

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
