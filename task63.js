//Мы определили функцию countOnline, которая принимает один аргумент: allUsers. Используйте оператор for...in внутри этой функции, чтобы пройтись по allUsersобъекту и вернуть количество пользователей, для onlineсвойства которых установлено значение true. countOnlineНиже показан пример объекта, которому можно передать данные . У каждого пользователя будет onlineсвойство, установленное в значение trueили false.
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Only change code below this line
  let val = 0;
  for (const name in allUsers) {
    if (allUsers[name].online === true) {
      val++;
    }
  }
  return val;
  // Only change code above this line
}

console.log(countOnline(users));
