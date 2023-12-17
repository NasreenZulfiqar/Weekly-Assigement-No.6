// write a program that  calculates the percentage.
function calculatepercentage(value: number, total: number): number {
    return (value / total) * 100;
}

// requaired obtainedmarks and totalmarks
var obtainedmarks = 89;
var totalmarks = 100;

console.log(`Percentage: ${calculatepercentage(obtainedmarks, totalmarks)}%`);