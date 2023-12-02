//Изменить массив, хранящийся в объекте
/*Взгляните на объект, который мы предоставили в редакторе кода. Объект userсодержит три ключа. Ключ dataсодержит пять ключей, один из которых содержит массив friends. Отсюда вы можете увидеть, насколько гибкими являются объекты как структуры данных. Мы начали писать функцию addFriend. Завершите его написание, чтобы он брал userобъект, добавлял имя аргумента friendв хранящийся в нем массив user.data.friendsи возвращал этот массив.

*/

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));
