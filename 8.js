let mountains = new Map();
mountains.set(1, "Everest");
mountains.set(2, "K2");
mountains.set(3, "Kangchenjunga");
for (let top of mountains.keys()) {
     console.log(top);
}
     
for (let peak of mountains) {
     console.log(peak);
}
