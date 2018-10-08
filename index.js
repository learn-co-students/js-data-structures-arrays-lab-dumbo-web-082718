// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
	drivers.push(name);
}

function destructivelyPrependDriver(name) {
	drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
	drivers.splice(-1);
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
}

function appendDriver(name) {
	// var newArray = drivers.slice();
	// newArray.push(name);
	// return newArray;
	// function appendDriver (name) {
  return [...drivers, name];

}

function prependDriver(name) {
	// const newArray = [...drivers];
	// newArray.splice(-1, 1);
	// return newArray;
	return [name, ...drivers];
}

function removeFirstDriver () {
  return drivers.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}