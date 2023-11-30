//Используйте *, чтобы импортировать все из файла
/*Предположим, у вас есть файл и вы хотите импортировать все его содержимое в текущий файл. Это можно сделать с помощью import * asсинтаксиса. Вот пример, в котором содержимое файла с именем math_functions.jsимпортируется в файл в том же каталоге:

import * as myMathModule from "./math_functions.js";
Приведенный выше importоператор создаст объект с именем myMathModule. Это просто имя переменной, вы можете назвать ее как угодно. Объект будет содержать все экспортированные данные math_functions.js, поэтому вы можете получить доступ к функциям так же, как и к любому другому свойству объекта. Вот как вы можете использовать импортированные функции addи :subtract

myMathModule.add(2,3);
myMathModule.subtract(5,3);
*/

/*ЗАДАЧА
Код в этом файле требует содержимого файла: string_functions.js, который находится в том же каталоге, что и текущий файл. Используйте import * asсинтаксис, чтобы импортировать все из файла в объект с именем stringFunctions.
*/

import * as stringFunctions from "./string_functions.js";
// add code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
