const sendRequest = function(method,url) {
     const promise = new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.send();
    
        xhr.onload = function () {
            resolve(xhr.response);
        };
     });
    return promise;

}
   
const getData = function () {
      sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
      .then(responseData => {
          console.log(responseData);
      })
}
const sendData = function () {
     sendRequest("POST", "https://jsonplaceholder.typicode.com/posts",
     JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
     ).then((responseDatas) => {
          console.log(responseDatas);
     });
};

  document.getElementById('get-button').addEventListener("click", getData);
  document.getElementById('get-button').addEventListener("click", sendData);


//   const result = xhr.response;
//   console.log(result);
