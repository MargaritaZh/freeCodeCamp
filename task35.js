/*тернарным оператором
Синтаксис a ? b : c
*/
/*Используйте условный оператор в checkEqualфункции, чтобы проверить, равны ли два числа. Функция должна возвращать либо строку Equal, либо строку Not Equal.*/

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
/*Следующая функция использует операторы if, else if и else для проверки нескольких условий:
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}*/
/*В checkSignфункции используйте несколько условных операторов (в соответствии с рекомендуемым форматом findGreaterOrEqual), чтобы проверить, является ли число положительным, отрицательным или нулевым. Функция должна вернуть positive, negativeили zero.
 */
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);
