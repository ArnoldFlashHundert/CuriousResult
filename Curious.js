document.addEventListener("DOMContentLoaded",function(){
// to do: initialize what's on the screen
document.querySelector("p").innerHTML = "We're going over our workflow...";

var testing = prompt("Did you finish the work yet? (Y/N?)");
console.log("testing ", testing);
if (testing == "Y") {
	document.querySelector("p").innerHTML = "CONGRATULATIONS for finishing the work!!!";
	}else{
	document.querySelector("p").innerHTML = "You didn't finish the work yet.";
}
})

