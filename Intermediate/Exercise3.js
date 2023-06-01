var fruitsString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var fruitsArray = fruitsString.split("/");
fruitsArray.forEach(function (fruit) {
  document.write(fruit + "<br>");
});
