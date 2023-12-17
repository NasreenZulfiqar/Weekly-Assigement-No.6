// write a program to convert the tempreture from celsius to fahrenheit
// and vice verse
function CelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function FahrenheitToCelsius(Fahrenheit: number): number{
    return (Fahrenheit -32) *5/9;
}

// requird metrial
var tempretureincelsius = 25;
var tempretureinfahrenheit = 77;

console.log(`${tempretureincelsius} Celsius is ${CelsiusToFahrenheit(tempretureincelsius)} Fahrenheit`);
console.log(`${tempretureinfahrenheit} Fahrenheit is ${FahrenheitToCelsius(tempretureinfahrenheit)} celsius`);