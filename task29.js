//For. Looping through an array using a For loop
//Перебор массива с помощью цикла for
/*Объявите и инициализируйте totalпеременную 0. Используйте forцикл для добавления значения каждого элемента массива myArrв total.*/
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
