function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random(0, 100) * (max - min + 1)) + min;
}
let x = 0;
let y = 100;
let a = getRandomIntInclusive(x, y);
console.log(a)