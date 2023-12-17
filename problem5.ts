//creat a programe that determines the category of a user provided age.
// the age is between 0 and 12 ,print"child".if it's between 13 and 19
//print"teenager".otherwise,print"adult".

function determineAgeCategory(age: number): string {
        if (age >= 0 && age <= 12) {
        return "child";
        } else if (age >= 13 && age <= 19) {
            return "teenager";
        } else {
            return "adult";
        }
    }
    // User age
    var userage = 18;
    console.log(determineAgeCategory(userage));