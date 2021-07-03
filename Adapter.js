class Duck{
    quack(){};
    fly(){};
}
class MallardDuck extends Duck{
    quack(){
        console.log("Mallard Duck says: Quack! Quack!");
    }
    fly(){
        console.log("Mallard Duck is flying.");
    }
}
class Turkey{
    gobbles(){};
    fly(){};
}
class WildTurkey extends Turkey{
    gobble() {
		console.log("Gobble gobble");
	}
 
	fly() {
		console.log("I'm flying a short distance");
	}
}

class TurkeyAdapter extends Duck{
    constructor(turkey){
        super();
        this.turkey = turkey;
    }
    quack(){
        this.turkey.gobble();
    }
    fly(){
        this.turkey.fly();
    }
}

class DuckSimulator{
    simulateDuck(){
        let mallardDuck = new MallardDuck();
        console.log("Testing Duck...");
        this.constructor.testDuck(mallardDuck)
        let wildTurkey = new WildTurkey();
        let turkeyAdapter = new TurkeyAdapter(wildTurkey);
        console.log("Testing Turkey...");
        this.constructor.testDuck(turkeyAdapter);
    }
    static testDuck(duck){
        duck.quack();
        duck.fly(); 
    }
}

let duckSimulator = new DuckSimulator();
duckSimulator.simulateDuck();
