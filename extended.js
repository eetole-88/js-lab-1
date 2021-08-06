console.log("This is working");
//values to try for hours: 20, 40, 50, 60
//values to try for wage: 10, 10, 10, 12
let hours = 40;
let wage = 10;
let regtime = wage * hours;
let overtime = wage * 1.5 * (hours - 40);

if (hours < 40) {
  payout = regtime;
  console.log(payout);
} else {
  payout = wage * 40 + overtime;
  console.log(payout);
}

let weeks = Math.ceil(1000000 / payout);
console.log(weeks);
