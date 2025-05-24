// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);
// The reason is that equality check == and comparison >< >= <= work differently. Comparisons convert null to a number, treating ti as 0. That's why nul>=0 is true and null >0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);


// === strict check 
console.log("2" === 2);  //it does not convert the datatypes on its own
