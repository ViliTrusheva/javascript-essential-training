/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// --- example
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
// --- end of example

// --- object 1
const laptop = {
  brand: "Apple",
  model: "MacBook Air",
  size: 13.3,
  weight: 2.75,
  color: "silver",
  batteryLife: 12,
  isCharged: true,
  chargeBattery: function (chargeStatus) {
    this.isCharged = chargeStatus;
  },
};

console.log("The laptop object:", laptop);
console.log("The laptop's charge status:", laptop.isCharged);

laptop.chargeBattery(false);
console.log("The laptop's charge status after charging:", laptop.isCharged);

// --- object 2
const watch = {
  brand: "Casio",
  model: "Illuminator",
  size: "Small",
  lightOn: false,
  toggleLight: function (lightStatus) {
    this.lightOn = lightStatus;
  },
};
console.log("The watch object:", watch);
console.log("The watch's light status:", watch.lightOn);

watch.toggleLight(true);
console.log("The watch's light status:", watch.lightOn);
