// write a programe that takes temperature and check it . if it is cold
//than suggest the user to wear warm clothes and so on according to the 
//weather.
function suggestClothing(temperature: number): string {
    return temperature < 10 ? "wear warm clothe" : "it is not cold, dress accordingly";
}

//weather temprature
var currentTemperature = 9;
console.log(suggestClothing(currentTemperature));