document.addEventListener("DOMContentLoaded", function() {

// variables
const status = document.querySelector('h1.status');
const button = document.querySelector('.plate button');
const body = document.querySelector('body');




// light switch functions
  button.addEventListener('click', function functionName() {
    if (this.className === "switch on") {
      status.innerText = "Hey, who turned off the lights?";
      button.className = "switch off";
      body.className = "dark";

    }else if (this.className === "switch off" ) {
      status.innerText = "It's so bright in here!";
      button.className = "switch on";
      body.className = "light";
    };

  });






});
