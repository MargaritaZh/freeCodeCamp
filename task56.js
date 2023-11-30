//Обработка отклоненного обещания с помощью catch
/*Обработка отклоненного обещания с помощью catch
catch— метод, используемый, когда ваше обещание было отклонено. Он выполняется сразу после rejectвызова метода обещания. Вот синтаксис:

myPromise.catch(error => {
  
});
error— это аргумент, передаваемый методу reject.
*/
//ЗАДАЧА Добавьте catchметод в свое обещание. Используйте errorв качестве параметра его функцию обратного вызова и войдите errorв консоль.

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
makeServerRequest.catch((error) => {
  console.log(error);
});
