switch (key) {
  case value:
    break;

  default:
    break;
}

const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March"); // => March
  // break;
  case 4:
    console.log("April"); // => April
    break;
  default:
    console.log("default case match");
    break;
}

const month1 = "march";
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "April":
    console.log("March"); // => March
  // break;
  case "March":
    console.log("April"); // => April
    break;
  default:
    console.log("default case match");
    break;
}

const month2 = "march";
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "April":
    console.log("March"); // => March
    break;
  case "March":
    console.log("April");
    break;
  default:
    console.log("default case match");
    break;
}
