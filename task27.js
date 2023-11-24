//Testing Objects for Properties
/*Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный параметру функции, objконкретное свойство, переданное параметру функции checkProp. Если переданное свойство checkPropнайдено в obj, верните значение этого свойства. Если нет, вернитесь Not Found.*/

if (obj.hasOwnProperty(checkProp)) {
  return obj[checkProp];
} else {
  return "Not Found";
}
