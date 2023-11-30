//Обработайте выполненное обещание с помощью then
/*Обработайте выполненное обещание с помощью then
Промисы наиболее полезны, когда в вашем коде есть процесс, который занимает неизвестное количество времени (т. е. что-то асинхронное), часто это запрос к серверу. Когда вы делаете запрос к серверу, это занимает некоторое время, и после его завершения вы обычно хотите что-то сделать с ответом сервера. Этого можно достичь, используя thenметод. Метод thenвыполняется сразу после выполнения вашего обещания с помощью resolve. Вот пример:

myPromise.then(result => {
  
});
resultпроисходит из аргумента, переданного методу resolve.

*/
//ЗАДАЧА Добавьте then метод в свое обещание. Используйте resultв качестве параметра его функцию обратного вызова и войдите resultв консоль.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});
