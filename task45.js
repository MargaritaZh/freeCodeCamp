//ES6 предоставляет новый синтаксис для создания объектов с использованием ключевого слова class .
/*Используйте classключевое слово и напишите a, constructorчтобы создать Vegetableкласс.

Класс Vegetableпозволяет вам создать овощной объект со свойством name, которое передается в файл constructor.*/

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
