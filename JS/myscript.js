// Train Tickes price 

 /** Tasks:
  * How much distance will you have to cover? (kilometres)
  * The rate is calculated at Є 0,21 per kilometre
  * -20% under 18 (<18)
  * -40% over 65 (>=65) 
  */


// 1st task
 var distance = parseInt(prompt ("What is the total distance of your journey in kilometres?") );
 console.log("Your distance is: ", distance);

 // 2nd task

 //The rate is calculated at Є o,21 per kilometre
 var price = 0.21;

 var totalPrice = price * distance;
 console.log(totalPrice);

 // 3rd task

 var age = parseInt(prompt ("How old are you?") );
 // console.log("I'm " + age + " years old")

// 4th task

if (age < 18) {
     console.log("20% off: ", amountDue);
    var discount = totalPrice * 20 / 100;
    var amountDue = totalPrice - discount;
} else if (age >= 65) {
     console.log ("40% off: ", amountDue);
    var discount = totalPrice * 40 / 100;
    var amountDue = totalPrice - discount;
} else {
     console.log ("0% off: ", amountDue);
    var amountDue = totalPrice;
}
     
// Amount due
        
document.getElementById("train-ticket").innerHTML = amountDue
