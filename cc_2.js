//Task 1: Calculate the Tip

let bill = 150; // Amount of bill
const tip = bill >= 125 ? bill * 0.2 : bill * 0.15; // If bill is higher than 100, then 20% tip, if not then 15% tip

//Task 2: Output Details

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`); // Message displaying bill, tip, and total amount

//Task 3: Create a Function

function calculateTip(bill) {
    return bill >= 125 ? bill * 0.2 : bill * 0.15; // Created function
}

let testBill = 100
const testTip = calculateTip(testBill) 
console.log(`The bill was $${testBill}, the tip was $${testTip}`) // Testing the function with a bill value of $100