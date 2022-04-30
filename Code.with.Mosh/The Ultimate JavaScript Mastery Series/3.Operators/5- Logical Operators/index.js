// Logical AND (&&)

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible', eligibleForLoan);

// Logical OR (||)
let isFunny = true;
let goodReputation = true;
let isCompatible = isFunny || goodReputation;
console.log(isCompatible);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
