//Мы определили функцию , filteredArrayкоторая принимает arrвложенный массив и elemв качестве аргументов и возвращает новый массив. elemпредставляет элемент, который может присутствовать или отсутствовать в одном или нескольких массивах, вложенных в arr. Измените функцию, используя forцикл, чтобы она возвращала отфильтрованную версию переданного массива, чтобы любой массив, вложенный в arrнего, elemбыл удален.
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
