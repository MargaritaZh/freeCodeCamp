/*Создайте функцию randomRange, которая принимает диапазон myMinи myMaxвозвращает случайное целое число, которое больше или равно myMinи меньше или равно myMax.
Подсказка
Math.floor(Math.random() * (max - min + 1)) + min
*/

function randomRange(myMin, myMax) {
  let num = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  if (num >= myMin || num <= myMax) {
    return num;
  }
}
