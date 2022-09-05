export class Car {
  private readonly motor = new Motor();

  on(): void {
    this.motor.on();
  }

  speedUp(): void {
    this.motor.speedUp();
  }

  stop(): void {
    this.motor.stop();
  }

  off(): void {
    this.motor.off();
  }
}

export class Motor {
  on(): void {
    console.log("Motor is starting");
  }

  speedUp(): void {
    console.log("Motor is speed up");
  }

  stop(): void {
    console.log("Motor is stopping");
  }

  off(): void {
    console.log("Motor is off");
  }
}

// example
const car = new Car();

console.log(car.on());
console.log(car.speedUp());
console.log(car.stop());
console.log(car.off());
