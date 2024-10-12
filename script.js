class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.driver = '';
    }

    startEngine() {
        this.driver = prompt("Who Will Drive? ");
        let start = '';
        while (start !== 'yes') {
            start = prompt("Start? (yes/no)");
            if (start === "no") {
                console.log(`${this.model} wants a drive, ${this.driver}`);
            }
        }
        setTimeout(() => {
            console.log(`${this.model} is ON \nWelcome ${this.driver}`);
            this.shutEngine();
        }, 2000);
    }

    shutEngine() {
        let off = '';
        while (off !== "yes") {
            off = prompt('Shut? (yes/no)');
            if (off === 'no') {
                console.log(`Ok, let's drive more`);
            }
        }
        setTimeout(() => {
            console.log(`${this.model} is signing off,\nSee you Soon ${this.driver}`);
        }, 5000);
    }
}

let info = new Car('Toyota', 'Hilux', 2021);
console.log(info);

info.startEngine();
