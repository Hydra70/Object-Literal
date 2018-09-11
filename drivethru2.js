var hamburger = {
  name: "Deluxe",
  bun: ["Plain", "Sesame", "Whole Wheat"],
  meat: ["Beef", "Pork", "Chicken"],
  veg: ["Pickles", "Lettuce", "Cucumber"],
  cheese: ["American", "Mozzarella", "Blue Cheese"],
  mayo: true,
  ketchup: true,
  mustard: true,
  relish: false,
  bbq: false,
  price: 10,
  qty: 1,
  ounces: 3
}

function randoBurger() {
  var randBun = Math.floor(Math.random()*hamburger.bun.length);
  var randMeat = Math.floor(Math.random()*hamburger.meat.length);
  var randVeg = Math.floor(Math.random()*hamburger.veg.length);
  var randCheese = Math.floor(Math.random()*hamburger.cheese.length);
  var askMayo = prompt("Do you want mayo? Y or N");
  askMayo.toLowerCase();
  if ((askMayo == "n") && (hamburger.mayo === true)) {
    window.alert("Sorry, has mayo");
    //document.getElementById("hamburgerFinal").innerHTML = "Sorry has mayo";
  }
  var askMustard = prompt("Do you want mustard? Y or N");
  askMustard.toLowerCase();
  if ((askMustard == "n") && (hamburger.mustard === true)) {
    window.alert("Sorry, has mustard");
    //document.getElementById("hamburgerFinal").innerHTML = "Sorry has mustard";
  }
  var askKetchup = prompt("Do you want ketchup? Y or N");
  askKetchup.toLowerCase();
  if ((askKetchup == "n") && (hamburger.ketchup === true)) {
    window.alert("Sorry, has ketchup");
    //document.getElementById("hamburgerFinal").innerHTML = "Sorry has ketchup";
  }
  document.getElementById("hamburgerFinal").innerHTML = "You are going to eat a " + hamburger.bun[randBun] + " " + hamburger.meat[randMeat] + " " + hamburger.veg[randVeg] + " " + hamburger.cheese[randCheese] + " burger.";
}
