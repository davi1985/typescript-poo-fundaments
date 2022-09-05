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
