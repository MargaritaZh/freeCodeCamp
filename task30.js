//Multidimensional array and For loop
//Цикл в цикле
//Измените функцию multiplyAllтак, чтобы она возвращала произведение всех чисел в подмассивах arr.

//мой способ
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  for (let i = 0; i < arr.length; i++) {
    let ca = arr[i];
    for (let j = 0; j < ca.length; j++) {
      product *= ca[j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
//их способ
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);
