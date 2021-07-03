class Pizza{
    getDescription(){
        console.log("Make a Pizza.");
    }
    cost(){

    }
}

class ThinCrustPizza extends Pizza{
    getDescription(){
        console.log("Make Pizza with thin crust.");
    }
    cost(){
        return 10;
    }
}
class ThickCrustPizza extends Pizza{
    getDescription(){
        return "Make Pizza with thik crust.";
    }
    cost(){
        return 15;
    }
}

class ToppingsDecorator extends Pizza{

    getDescription(){
        return "Make Pizza with Toppings.";
    }
    cost(){
    }
}
class Cheese extends ToppingsDecorator{
    constructor(pizza){
        super();
        this.pizza = pizza;
    }
    getDescription(){
        return `${this.pizza.getDescription()}Add cheese to the pizza.`;
    }
    cost(){
        return this.pizza.cost() + 10;
    }
}

class Olives extends ToppingsDecorator{
    constructor(pizza){
        super();
        this.pizza = pizza;
    }
    getDescription(){
        return `${this.pizza.getDescription()}Add Olives to the pizza.`;
    }
    cost(){
        return this.pizza.cost() + 20;
    }
}

let pizza = new ThickCrustPizza();
let cheesePizza = new Cheese(pizza);
let CheeseOliveThickPizza = new Olives(cheesePizza);
console.log(CheeseOliveThickPizza.getDescription());
console.log(CheeseOliveThickPizza.cost());

