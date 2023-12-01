//Мы определили функцию, copyMachineкоторая принимает arr(массив) и num(число) в качестве аргументов. Предполагается, что функция возвращает новый массив, состоящий из numкопий файлов arr. Мы сделали за вас большую часть работы, но она пока работает не совсем правильно. Измените функцию, используя синтаксис расширения, чтобы она работала правильно.
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
