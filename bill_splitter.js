//Task 1: Calculate the Tip

let bill = 150; // Amount of bill
const tip = bill >= 125 ? bill * 0.2 : bill * 0.15; // If bill is higher than 100, then 20% tip, if not then 15% tip

//Task 2: Output Details

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`); // Message displaying bill, tip, and total amount

//Task 3: Create a Function

function calculateTip(bill) {
    return bill >= 125 ? bill * 0.2 : bill * 0.15; // Created function to calculate tip
}

let testBill = 100; //Test bill value
const testTip = calculateTip(testBill); //Test tip function
console.log(`The bill was $${testBill}, the tip was $${testTip}`); // Testing the function with a bill value of $100

//Task 4: Utilize Arrays

let bills1 = [275, 40, 430]; //Data Set 1 Array
const tips1 = bills1.map(bill => calculateTip(bill)); //Data Set 1 Tips array
const totals1 = bills1.map((bill,index) => bill + tips1[index]); // Data Set 1 Totals array
console.log(`The total values are $${totals1}`); // Data Set 1 total value display

let bills2 = [125, 555,44]; //Data Set 2 Array
const tips2 = bills2.map(bill => calculateTip(bill)); //Data Set 2 Tips array
const totals2 = bills2.map((bill, index) => bill + tips2[index]); // Data Set 2 Totals array
console.log(`The total values are $${totals2}`); // Data Set 2 total value display