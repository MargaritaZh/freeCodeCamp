/*Функция parseInt() анализирует строку и возвращает целое число. 
Задача: 
Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала входную строку strв целое число и возвращала его.*/
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

/*parseInt(string, radix)
Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала двоичное число в целое число и возвращала его.
*/
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
