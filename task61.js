//Мы определили функцию , checkInventoryкоторая получает отсканированный элемент в качестве аргумента. Возвращает текущее значение ключа scannedItemв foodsобъекте. Вы можете предположить, что в качестве аргумента будут предоставлены только действительные ключи checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let valies = foods[scannedItem];
  return  valies
  // Only change code above this line
}

console.log(checkInventory("apples"));