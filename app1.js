class Car{
    name;
    year;
    color;
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Cobalt", 2021, "white");
const car2 = new Car("Lacetti", 2023, "black");
const car3 = new Car("Bugatti", 2020, "blue");

console.log(car1);

console.log(car2);

console.log(car3);