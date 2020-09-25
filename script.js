
// Set the date we're counting down to
var countDownDate = new Date("Dec 28, 2020 23:59:59")
 .getTime();

// Update the count down every 1 second
var x = setInterval(function() {
 
 // Get today's date and time
 var now = new Date().getTime();
 
 // Find the distance between now and the count down date
 var distance = countDownDate - now;
 
 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 *
  24));
 var hours = Math.floor((distance % (1000 * 60 * 60 *
  24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 *
  60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) /
  1000);
 
 // Display the result in the element with id="demo"
 document.getElementById("demo").innerHTML = days +
  "d " + hours + "h " +
  minutes + "m " + seconds + "s";
 
 // If the count down is finished, write some text 
 if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML =
   "EXPIRED";
 }
}, 1000);


//side nav
function openNav() {
 document.getElementById("mySidenav").style.width =
  "250px";
 document.getElementById("main").style.marginLeft =
  "250px";
}

function closeNav() {
 document.getElementById("mySidenav").style.width = "0";
 document.getElementById("main").style.marginLeft = "0";
}


//click button 1 open login window
function aA() {
 if (document.getElementById("login_").style.display ==
  "none") {
  document.getElementById("login_").style.display =
   "initial";
  document.getElementById("button_1").innerHTML = //login becomes return when login window is out
   "return";
 } else {
  document.getElementById("login_").style.display =
   "none";
  document.getElementById("button_1").innerHTML =
   "Login";
 }
}

function bB() {
 document.getElementById("login_").style.display =
  "none";
 document.getElementById("button_1").innerHTML =
 "Login";
}

function login() {
 var username = document.getElementById("username")
  .value;
 var password = document.getElementById("password")
  .value;
 var failure = document.getElementById("failure")
 console.log(username + "/" + password);
 
 if (username == "Dkboyzzz") {
  
  
  if (password == "peroninippel") {
   
  } else {
   failure.innerHTML = "Wrong Username or Password";
   
  }
 } else if (username == "Hengover") {
  if (password == "petit") {
   
  } else {
   failure.innerHTML =
    "Den Heng ass een klengen Spiller";
  }
 } else {
  failure.innerHTML =
   "Wrong Username or Password";
 }
}










