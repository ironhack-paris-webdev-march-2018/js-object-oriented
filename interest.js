console.log("interest.js");

// compoundInterest
//   p is the principal (how much you are borrowing)
//   r is the interest rate
//   n is how many times per year you are adding interest
//   t is how many years you are paying it off in

// Example:
//   compoundInterest(30000, 0.08, 12, 4)
//   Loan of 30k, 8% interest, 12 times a year, over 4 years
function compoundInterest (p, r, n, t) {
  return p * Math.pow(1 + (r/n) , n*t);
  // Math.pow(2, 8);
  // 2 ** 8
}

for (var years = 3; years <= 10; years += 1) {
  var totalPayed = compoundInterest(30000, 0.08, 12, years);
  var extraMoney = Math.round(totalPayed - 30000);

  // 5 years: 20000 extra payed
  console.log(years + " years: " + extraMoney + " extra payed");
}
