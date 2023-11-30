//Выполните обещание с решимостью и отклоните его.
/*Обещание имеет три состояния: pending, fulfilled, и rejected. Обещание, созданное вами в последнем задании, навсегда застряло в этом pendingсостоянии, поскольку вы не добавили способ выполнения обещания. Для этого используются параметры и, заданные аргументу обещания resolve. используется, когда вы хотите, чтобы ваше обещание было успешным, и используется, когда вы хотите, чтобы оно не удалось. Это методы, которые принимают аргумент, как показано ниже.rejectresolvereject

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
В приведенном выше примере в качестве аргумента этих функций используются строки, но на самом деле это может быть что угодно. Часто это может быть объект, данные которого вы будете использовать для размещения на своем веб-сайте или в другом месте.*/
//ЗАДАЧА
//Заставьте обещание справляться с успехом и неудачей. Если responseFromServerесть true, вызовите resolveметод для успешного выполнения обещания. Передайте resolveстроку со значением We got the data. Если responseFromServerесть false, используйте rejectвместо этого метод и передайте ему строку: Data not received.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
    // Change this line
  } else {
    reject("Data not received");
    // Change this line
  }
});
