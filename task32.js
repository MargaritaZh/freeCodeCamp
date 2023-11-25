/*У нас есть массив объектов, представляющих разных людей в наших списках контактов.
Для вас заранее написана функция, которая принимает свойство ( ) в качестве lookUpProfileаргументов name.prop
Функция должна проверить, nameявляется ли это фактическим контактом firstNameи заданное свойство ( prop) является свойством этого контакта.
Если оба значения верны, верните «значение» этого свойства.
Если nameне соответствует ни одному контакту, верните строку No such contact.
Если propне соответствует ни одному допустимому свойству найденного контакта, nameверните строку No such property.*/

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");
