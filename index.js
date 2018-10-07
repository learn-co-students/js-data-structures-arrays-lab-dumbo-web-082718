// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let newarray
  newarray = [...drivers, name];
  return newarray;
}

function prependDriver(name) {
  let newarray
  newarray = [name, ...drivers];
  return newarray;
}


function removeLastDriver() {
  let newarray
  newarray = drivers.slice(0, -1);
  return newarray;
}

function removeFirstDriver() {
  let newarray
  newarray = drivers.slice(1);
  return newarray;
}
