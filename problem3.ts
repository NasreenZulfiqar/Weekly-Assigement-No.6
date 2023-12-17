//write a programe that convert given number of day in to weeks and 
//days such as 17 days = 2weeks and 3days.
function daysToWeeksAndDays(day: number): string {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    return `${days} days = ${weeks} weeks and ${remainingDays} days`;
}

//requaired days
var days = 9;
console.log(daysToWeeksAndDays(days));