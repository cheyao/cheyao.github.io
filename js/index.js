var number = 1;

setInterval(function() {
document.getElementById("money").innerHTML = "Money: " + number;
number *= 2
}, 1000)
