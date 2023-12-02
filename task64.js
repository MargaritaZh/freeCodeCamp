/*Создайте массив всех ключей объекта 
с помощью Object.keys()
*/
//Завершите написание getArrayOfUsersфункции, чтобы она возвращала массив, содержащий все свойства объекта, который она получает в качестве аргумента.
let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
