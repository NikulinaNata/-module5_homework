let arr = [2, 5, 11, 42, 69, 0, "go", null];
let even =[];
let odd =[];
let zero =[];
let others =[];
for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] === "number" && arr[i] % 2 === 0 && arr[i] != 0) {
     even.push("i")
}
   else if (typeof arr[i] === "number" && arr[i] % 2 != 0) {
    odd.push("i")
}
   else if (arr[i] === 0) {
    zero.push("i")
}
   else {
     others.push("i")
}
}
console.log('Четные - ' + even.length)
console.log("Нечетные - " + odd.length)
console.log("Ноль - " + zero.length)
console.log("Другое - " + others.length)
