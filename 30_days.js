//DAY 0

 console.log("Hello, World.");
 
//DAY 1

  // Declare second integer, double, and String variables.
  var secondI;
  var secondD;
  var secondStr;
    // Read and save an integer, double, and String to your variables.
secondI = parseInt(readLine());
secondD = parseFloat(readLine());
secondStr = readLine();
    // Print the sum of both integer variables on a new line.
console.log(i + secondI);
    // Print the sum of the double variables on a new line.
console.log((d + secondD).toFixed(1));
    // Concatenate and print the String variables on a new line
console.log(s + secondStr);

//DAY 2

 var totalCost = Math.round(meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100));
  
    console.log("The total meal cost is " + totalCost + " dollars.");

}

//DAY 3

function main() {
    const N = parseInt(readLine(), 10);
     if (N%2 !== 0 || (N > 5 && N < 21))
        console.log("Weird");
    else
        console.log("Not Weird");

}  

//DAY 4
function Person(initialAge){
    // Add some more code to run some checks on initialAge
        var age = initialAge;
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
 if (age < 13 && age > -1){
     console.log("You are young.");
 } else if (age > 12 && age < 18) {
     console.log("You are a teenager.");
 } else if (age > 17) {
     console.log("You are old.");
 } else {
    console.log("Age is not valid, setting age to 0.");
                age = 0;
     this.amIOld();
 }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       age++;
   };
}
