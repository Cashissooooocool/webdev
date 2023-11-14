function tellFortune(numOfChildren, partnerName, jobTitle) {
console.log(`You will be an ${jobTitle} and be married to ${partnerName} with ${numOfChildren} kids.`);
}

function calculateDogAge(puppyAge) {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById(
        "age"
    ).innerHTML = `Your doggie is ${dogAge} years old in dog years!`;
} 

function calculateSupply(age, amountPerDay) {
    age = document.getElementById("current-age").value
    amountPerDay = document.getElementById("amount-per-day").value;

    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    document.getElementById(
        "supply"
        ).innerHTML = `You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`;
}

function calcCircumfrence(radius) {
    radius = document.getElementById("radius").value;
    circumfrence = 2 * Math.PI * radius;
    document.getElementById(
        "circumference"
    )`The circumfrence is ${circumfrence}`;
}
const calcArea = (radius) => console.log(`The area is ${Math.PI * radius * radius}`);

function celsiusToFahrenheit() {
    celsius = document.getElementById("celsius").value;
    fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById(`fahrenheit`).innerHTML = `${celsius}C ia ${fahrenheit}F`
}

const fahrenheitToCelsius = (celsius) => console.log(`${celsius}C is ${celsius * 9 / 5 + 32} F`);
function fahrenheitToCelsius(fahrenheit) {
    celsius = (fahrenheit - 32); 5 / 9;
    console.log(`${fahrenheit}F is ${celsius}`);
}
const fahrenheitToCelsius = (fahrenheit) => console.log(`${fahrenheit}F is ${fahrenheit - 32 * 5 / 9}C`);

function tellFortune() {
    e.preventDefault();
    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("partner").value;
    jobTitle = document.getElementById("job").value;
    document.getElementById("fortune").innerHTML 
}

