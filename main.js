function goFun() {
 let userInput = document.getElementById("user").value;
userInput = userInput.toLowerCase();
userInput = userInput.replace(
 / /g,
 ""
);

if (userInput == "codewithmukesh") {
 window.open("https://codewithmukesh.online/");
}
else if (userInput == "travelromio") {
window.open("http://travelromio.online/");
} 

else if (userInput == "gallery") {
window.open("https://mc0749050.github.io/Gallery/");
} 

else if (userInput == "intrestcalculator") {
 window.open("https://mc0749050.github.io/Intrest-calculator-/");
}

else if (userInput == "love") {
window.open("https://mc0749050.github.io/Love---website-/");
} 

else if (userInput == "music") {
 window.open("https://mc0749050.github.io/Music---website-/");
}

else if (userInput == "food") {
window.open("https://mc0749050.github.io/Food-ecomerce-website-/");
} 

else if (userInput == "cricket") {
 window.open("https://mc0749050.github.io/Cricket-Game/");
}
else if (userInput == "calculator") {
 window.open("https://mc0749050.github.io/Calculator/");
}

else{
 alert("website not found");
}
 
}
