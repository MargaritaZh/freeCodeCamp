//Новой особенностью ES6 является литерал шаблона
/*Рассмотрим код ниже:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
Консоль отобразит строки Hello, my name is Zodiac Hasbro!и I am 56 years old..*/
/*Используйте синтаксис литералов шаблона с обратными кавычками, чтобы создать массив строк элементов списка ( li). Текст каждого элемента списка должен быть одним из элементов массива свойства failureобъекта resultи иметь classатрибут со значением text-warning. Функция makeListдолжна возвращать массив строк элементов списка.

Используйте метод итератора (любой цикл), чтобы получить желаемый результат (показан ниже).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]   */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
