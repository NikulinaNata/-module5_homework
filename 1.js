let a = prompt("Введите значение");
let b = +a;
console.log(typeof b);
if (b % 2 == 0) {
  console.log('Четное')
} else {
  console.log('Нечетное')
}
if (isNaN(b)) {
  console.log('Упс, кажется, вы ошиблись')
}
