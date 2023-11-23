//Convert the switch statement to an object named lookup. Use it to look up val and assign the associated string to the result variable.
//Преобразуйте оператор переключения в объект с именем lookup. Используйте его для поиска valи присвоения связанной строки переменной result.
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  // Only change code above this line

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");
