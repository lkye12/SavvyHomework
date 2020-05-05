//#1
const pizzaToppings = ["spinach", "bacon", "onions", "chicken"];
//#2
function greetCustomer() {
  let greeting = `Welcome to Pizza Palace, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
//#3
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(` ${order}coming up!`);
  return [size, crust, toppings];
}
//#4
function preparePizza([size, crust, toppings]) {
  console.log("...Pizza is Cooking...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}
//#5
function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}Enjoy!`);
  return pizza;
}
greetCustomer();
servePizza(preparePizza(getPizzaOrder("Large", "thick", "chicken", "bacon", "onions")));
