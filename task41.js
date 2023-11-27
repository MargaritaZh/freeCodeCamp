//деструктурирующее присваивание внутри аргумента функции

/*В некоторых случаях вы можете деструктурировать объект в самом аргументе функции.

Рассмотрим код ниже:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Это эффективно деструктурирует объект, отправленный в функцию. Это также можно сделать на месте:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Когда profileDataпередается указанной выше функции, значения деструктурируются из параметра функции для использования внутри функции.
*/

//Используйте деструктурирующее присваивание внутри аргумента функции halfтолько для отправки maxи minвнутри функции.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line
