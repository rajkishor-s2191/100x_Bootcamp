const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Question-1 : Input the distance in Kilometer and Convert into Meter and Centimeter.
rl.question("Enter Distance in km: ", function (dist) {
  const m = parseFloat(dist) * 1000;
  const cm = parseFloat(dist) * 10000;
  console.log(`Distance in meters(m): ${m}`);
  console.log(`Distance in centimeters(cm): ${cm}`);
  rl.close();
});

// Question-2: WAP to input radius of a circle and log the area of circle.
rl.question("Enter the radius of the circle: ", (r) => {
  const area = 3.14 * parseFloat(r) ** 2;
  console.log(`Area of the cirle is: ${area}`);
  rl.close();
});

// Question-3: WAP to input two numbers and perform arithmetic operations on those numbers.
rl.question("Enter First Number(A): ", (num1) => {
  rl.question("Enter Second Number(B): ", (num2) => {
    console.log(`A+B = ${parseFloat(num1) + parseFloat(num2)}`);
    console.log(`A-B = ${parseFloat(num1) - parseFloat(num2)}`);
    console.log(`A*B = ${parseFloat(num1) * parseFloat(num2)}`);
    console.log(`A/B = ${parseFloat(num1) / parseFloat(num2)}`);
    rl.close();
  });
});

//Question-4: WAP to calculate total marks in two subject and then calculate percentage.
rl.question("Enter Mark for First Subject: ", (m1) => {
  rl.question("Enter Mark for Second Subject: ", (m2) => {
    const avg = (parseFloat(m1) + parseFloat(m2)) / 2;
    console.log("Average: ", avg);
    rl.close();
  });
});

// Question-5: WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.
rl.question("Enter length: ", (l) => {
  rl.question("Enter breadth: ", (b) => {
    const area = parseFloat(l) * parseFloat(b);
    const perimeter = 2 * (parseFloat(l) + parseFloat(b));
    console.log(`Area: ${area}, Perimeter: ${perimeter}`);
    rl.close();
  });
});

// Question-6: WAP to input n numbers and log the average of those number.
const numbers = [10, 20, 30, 40, 50];

const average = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum / numbers.length;
};

console.log(`Average: ${average(numbers)}`);

// Question-7: WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
rl.question("Input the distance between two cities (in km): ", (dist) => {
  const m = parseFloat(dist) * 1000;
  const cm = parseFloat(dist) * 10000;
  const ft = parseFloat(dist) * 3280.84;
  const inch = parseFloat(dist) * 39370.1;
  console.log(`Meters: ${m}`);
  console.log(`Centimeter: ${cm}`);
  console.log(`Feet: ${ft}`);
  console.log(`Inches: ${inch}`);
  rl.close();
});

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
rl.question("Enter Temprature (in Fahrenheit): ", (temp) => {
  const temp_c = ((parseFloat(temp) - 32) * 5) / 9;
  console.log(`Temperature (in Centigrade): ${temp_c}`);
  rl.close();
});

// Question-9: Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
rl.question("Enter the Quantity: ", (q) => {
  rl.question("Enter the Amount: ", (a) => {
    const discount = parseFloat(a) * parseFloat(q) * 0.1;
    const final_amount = parseFloat(q) * parseFloat(a) - parseFloat(discount);
    console.log(`Final amount: ${final_amount}, Discount: ${discount}`);
    rl.close();
  });
});

// Question-10: Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
rl.question("Enter the Principal: ", (p) => {
  rl.question("Enter the Rate: ", (r) => {
    rl.question("Enter the Years: ", (y) => {
      const si = (parseFloat(p) * parseFloat(r) * parseFloat(y)) / 100;
      console.log(`Simple Interest: ${si}`);
      rl.close();
    });
  });
});
