// coffee shop setup
// one coffee machine, has a brew function -- has bold brew and normal brew
// types of coffee -- dark, light, and espresso
// espresso machine takes longe
// ie: will have one espressso machine
// espresso machine will take longer, has the milk steamer option and the the espresso press
// coffee sizes are s, m, and large, 8, 16, and 24 oz ... who the fuck needs 24oz of coffee

class Order {
  // order example => large black Coffee, or medium coffee, two creams
  constructor(customerName, order, size) {
    this.customerName = customerName;
    this.order = order;
    this.size = size;
  }
}

class Amenities {
  // not sure if it should be tsp or tbsp lolz
  constructor(option, order) {
    // below are options to put in the coffee
    // this.sugar = '1 tsp of Sugar';
    // this.cream = '1 tsp of Cream';
    // this.milk = '1 tsp of Milk';
    // this.halfandhalf = '1 tsp of half and half'
    this.order = order;
    this.option = option;
    this.assimilateWithBeverage = this.assimilateWithBeverage.bind(this);
  }

  assimilateWithBeverage() {
    console.log("stirring beverage... please wait...");
    setTimeout(() => {
      console.log(`${this.option} added to ${this.order.customerName}'s drink`);
    }, 4000);

    return "";
  }
}

class coffeeMaker {
  constructor() {
    this.brewCoffee = this.brewCoffee.bind(this);
  }

  brewCoffee(currentOrder) {
    console.log("please wait while we brew your coffee...");
    const coffeePromise = new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve(
          console.log(
            `Order ready for ${currentOrder.customerName}!! PICK UP YOUR COFFEE!`
          )
        );
      }, 10000);
    });
    return coffeePromise;
  }
}

class espressoMachine {
  constructor(currentBeverage) {
    this.currentBeverage = currentBeverage;
  }

  brewEspresso() {}
}

// order Object = { customerName: 'dat boi', order: 'medium espresso'}

class coffeeStand {
  constructor(currentOrder) {
    this.currentOrder = currentOrder;
    // this.makeOrder = this.makeOrder.bind(this);
  }

  makeOrder() {
    console.log(this);
  }
}

const firstOrder = new Order(
  "Robert 'The Big Cheese' Yeakel",
  "Coffee with 2 creams",
  "Large"
);
// console.log(firstOrder);
const stand = new coffeeStand(firstOrder);
const coffeeMachine = new coffeeMaker();
// console.log(stand.makeOrder());
const amenities = new Amenities("2 creams", firstOrder);
console.log("Hello, Welcome to BeanFlicker Cafe, tell me order");
(function() {
  const secondPromise = new Promise(function(resolve, reject) {
    setTimeout(() => console.log("."), 2000);
    setTimeout(() => console.log("."), 2000);
    setTimeout(() => resolve(console.log("."), 2000));
  });
  return secondPromise;
})().then(stuffs => {
  // console.log(stuffs);
  console.log("Ayeee... I'm Robert.. Large Coffee with 2 creams fam.");
  coffeeMachine.brewCoffee(firstOrder).then(timeOUT => {
    // console.log(timeOUT);
    amenities.assimilateWithBeverage();
  });
});
// console.log(amenities.assimilateWithBeverage());
