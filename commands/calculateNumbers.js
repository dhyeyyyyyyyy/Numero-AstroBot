/*CMD
  command: calculateNumbers
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


// Get stored DOB and name
let dob = User.getProperty("dob");
let name = User.getProperty("name");

// Helper function: Reduce a number to a single digit
function reduceToSingleDigit(num) {
  while (num > 9) {
    num = String(num)
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
}

// Revised numerology chart
let numerologyChart = {
  A: 1, J: 1, S: 3,
  B: 2, K: 2, T: 4,
  C: 3, L: 3, U: 6,
  D: 4, M: 4, V: 6,
  E: 5, N: 5, W: 6,
  F: 8, O: 7, X: 6,
  G: 3, P: 8, Y: 1,
  H: 5, Q: 1, Z: 7,
  I: 1, R: 2
};

// Step 1: Calculate Life Path Number
let dobDigits = dob.replace(/\D/g, ""); // Remove non-digits
let lifePathSum = dobDigits
  .split("")
  .reduce((acc, digit) => acc + parseInt(digit), 0);
let lifePathNumber = reduceToSingleDigit(lifePathSum);

// Step 2: Calculate Destiny Number (based on Day of Birth - DD)
let dayOfBirth = parseInt(dob.split("/")[0]); // Extract "DD"
let destinyNumber = reduceToSingleDigit(dayOfBirth);

// Step 3: Calculate Name Number (based on full name using new chart)
let nameUpper = name.toUpperCase().replace(/[^A-Z]/g, ""); // Uppercase and remove non-letters
let nameSum = nameUpper
  .split("")
  .reduce((acc, letter) => acc + numerologyChart[letter], 0);
let nameNumber = reduceToSingleDigit(nameSum);

// Store results for future use
User.setProperty("lifePathNumber", lifePathNumber, "integer");
User.setProperty("destinyNumber", destinyNumber, "integer");
User.setProperty("nameNumber", nameNumber, "integer");

// Display results
Bot.sendMessage(`
🔢 **Numerology Results**:

1️⃣ **Life Path Number**: ${lifePathNumber}
2️⃣ **Destiny Number**: ${destinyNumber}
3️⃣ **Name Number**: ${nameNumber}

Now generating your Loshu Grid...
`);
Bot.runCommand("generateLoshuGrid"); // Proceed to Loshu Grid generation
