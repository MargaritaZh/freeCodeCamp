//Используйте геттеры и сеттеры для управления доступом к объекту
/*Используйте classключевое слово для создания Thermostatкласса. Принимает constructorтемпературу по Фаренгейту.

В классе создайте объект getterдля получения температуры в градусах Цельсия и объект setter, который принимает температуру в градусах Цельсия.

Помните, что C = 5/9 * (F - 32)и F = C * 9.0 / 5 + 32, где F– значение температуры в градусах Фаренгейта, а C– значение той же температуры в градусах Цельсия.

Примечание. Когда вы это реализуете, вы будете отслеживать температуру внутри класса по одной шкале: по Фаренгейту или по Цельсию.

В этом сила геттера и сеттера. Вы создаете API для другого пользователя, который сможет получить правильный результат независимо от того, кого вы отслеживаете.

Другими словами, вы абстрагируете от пользователя детали реализации.*/

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    return (this._fahrenheit = (celsius * 9.0) / 5 + 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/*class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
Консоль будет отображать строки anonymousи newAuthor.*/
