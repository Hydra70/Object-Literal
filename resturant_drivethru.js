var hamburger = {
  meat: "beef",
  vegtables: "lettuce",
  cheese: "mozzarella",
  mayo: true,
  mustard: false,
  ketchup: false,
  bbq: false,
  salt: true,
  pepper: true,
  price: 7,
  qty: 1
}

var driveThru = prompt("How many burgers are you buying today?");
window.alert("You are buying " + hamburger.qty * driveThru + " burger(s).");
window.alert("Your total price is $" + hamburger.price * driveThru);