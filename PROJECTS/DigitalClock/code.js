const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

 /*
 setInterval is a built-in JavaScript function that 
repeatedly calls a specified function or executes a code 
snippet with a fixed time delay between each call.
 The first argument is the function to be executed.
 The second argument is the time interval in milliseconds.
 In this case, it is set to 1000 milliseconds (1 second).
 */
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

