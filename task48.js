//Используйте экспорт, чтобы поделиться блоком кода
export const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { lowercaseString };

/*
export const add = (x, y) => {
  return x + y;
}
*/
/*Вышеуказанное является распространенным способом экспорта одной функции, но вы можете добиться того же самого:

const add = (x, y) => {
  return x + y;
}

export { add };
*/
