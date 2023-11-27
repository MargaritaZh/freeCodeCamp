/*В некоторых ситуациях, связанных с деструктуризацией массива, нам может потребоваться собрать остальные элементы в отдельный массив.

Результат аналогичен Array.prototype.slice(), как показано ниже:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr); */
//Используйте назначение деструктуризации с остальным синтаксисом, чтобы эмулировать поведение Array.prototype.slice(). removeFirstTwo()должен возвращать подмассив исходного массива listс опущенными первыми двумя элементами.
function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;

  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
