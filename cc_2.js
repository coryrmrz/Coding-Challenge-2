//Task 1: Calculate the Tip

let bill = 125; // Amount of bill
const tip = bill >= 100 ? bill * 0.2 : bill * 0.15; // If bill is higher than 100, then 20% tip, if not then 15% tip

//Task 2: Output Details

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`); // Message displaying bill, tip, and total amount