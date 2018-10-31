const CURRENT_EPS = 5.44; // Current EPS
const EXPECTED_GROWTH = 9.1; // Percentage
const PRICE_TO_EARNINGS = 11.75; // P/E

// Rule of 72 to get the amount of years it would
// take in order to double your money.
const YEARS_TO_DOUBLE = Number(72 / EXPECTED_GROWTH);

// Get leftover time it would take take to get money back.
const EXTRA_EPS = 10 - YEARS_TO_DOUBLE;

// Convert leftover time to .decimal and get remaining cash
const REMAINING_EPS = CURRENT_EPS * Number('0.' + EXTRA_EPS.toString().replace('.', ''));

// Create new EPS, multiply original by 2 and add the remaining
const NEW_EPS = (CURRENT_EPS * 2) + REMAINING_EPS;

// Create the estimated 10 year price.
const TEN_YEAR_PRICE = NEW_EPS * PRICE_TO_EARNINGS;

console.clear();
console.log(`Expected price in 10 years: \n$${TEN_YEAR_PRICE.toFixed(2)}`);
console.log('\n');

// Create sticker price (Price we should pay for ASAP if possible)
// Note: This is "FAIR" price, not one with a safety net.
const STICKER_PRICE = TEN_YEAR_PRICE / 4;

console.log(`Sticker Price (No Safety Net): \n$${STICKER_PRICE.toFixed(2)}`);
console.log('\n');