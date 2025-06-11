let count = 0;
function sayHello() {
  alert("hello" + count);
  count++;
}
window.sayHello = sayHello;
