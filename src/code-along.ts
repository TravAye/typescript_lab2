export class Player {
  name: string;
  jersey: number;
  constructor(name: string, jersey: number) {
    this.name = name;
    this.jersey = jersey;
  }
}

// super() calls from the parent constructor.
class TeamPlayer extends Player {
  team: string;
  constructor(name: string, jersey: number, team: string) {
    super(name, jersey);
    this.team = team;
  }
}

export class Timer {
  name: string;
  time: number = 0;
  constructor(name: string) {
    this.name = name;
  }
}

class Bike {
  speed: number = 0; // speed property starts at 0
  constructor() {}
  go(): void {
    this.speed++;
  }
}

class GearedBike extends Bike {
  gear: number = 1;
  shiftUp() {
    this.gear++;
  }
  shiftDown() {
    this.gear++;
  }
}

let myBike: GearedBike = new GearedBike();
myBike.go();
console.log(myBike.speed);
myBike.shiftUp();
console.log(myBike.gear);

class ColorfulBike extends Bike {
  color: string;
  constructor(color: string) {
    super(); // calls Bike's constructor
    this.color = color;
  }
}

// https://docs.google.com/document/d/1qdAkZ48ikusuzF3VHTLod_XMCD0FpE1U_b8TFHW8z30/preview
