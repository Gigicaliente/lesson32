//task1

function greet () {
console.log("Hello World!")
}
greet()

//task2

function sayHello(name) {
    console.log("Hello, " + name +"!")
}
sayHello("Ganna")
sayHello("Khakim")

//task3


function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(1, 3))


//task4

function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(4))
console.log(isEven(15))
console.log(isEven(3))
console.log(isEven(8))

//task5

let num3 = 5;
let num4 = 5;
function max(num3, num4) {
return num3>num4;
}

 console.log(max(num3, num4))

if (max(num3, num4)) {
    console.log(num3);
} else if (num3 === num4) {
    console.log("Числа равны");
} else {
    console.log(num4);
}


//task6

function getInitials(name, lastName) {
    return `${name.charAt(0)}.${lastName.charAt(0)}.`;
}
console.log(getInitials("Ganna", "Akhmetova"))
console.log(getInitials("Khakim", "Amirtayev"))
console.log(getInitials("Ameli", "Amirtayeva"))


//task7

function square(num) {
    return num ** 2
}


function cube(num) {
 return (square(num)) * num

}
console.log(square(3))
console.log(cube(3))


//task8

sum = (num1, num2) => {
    return num1 + num2
}
console.log(sum(1,3))

