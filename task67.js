//Сопоставьте цифры и буквы алфавита
//Создайте одно регулярное выражение, которое соответствует диапазону букв между hи sи диапазону чисел между 2и 6. Не забудьте включить соответствующие флаги в регулярное выражение.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
