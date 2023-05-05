function sayHello(){
  var response = prompt("What is your name?");
  alert("Hello " + response + ", Happy Lantern Festival and wish you have a good time!");
}
sayHello()


function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "48px";
  x.style.color = "red";
}

document.getElementById('agreeBtn').addEventListener('click', function() {
  window.location.href = "元宵节灯谜.html";
});
