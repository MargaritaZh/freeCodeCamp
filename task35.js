/*тернарным оператором
Синтаксис a ? b : c
*/
/*Используйте условный оператор в checkEqualфункции, чтобы проверить, равны ли два числа. Функция должна возвращать либо строку Equal, либо строку Not Equal.*/

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
