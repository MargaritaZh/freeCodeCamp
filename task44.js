//

/*При определении функций внутри объектов в ES5 мы должны использовать ключевое слово functionследующим образом:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
В ES6 вы можете functionвообще удалить ключевое слово и двоеточие при определении функций в объектах. Вот пример этого синтаксиса:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};  */

//Выполните рефакторинг функции setGearвнутри объекта bicycle, чтобы использовать сокращенный синтаксис, описанный выше.
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);
