/*CMD
  command: generateLoshuGrid
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

// Retrieve the user's date of birth and name
let dob = User.getProperty("dob"); // Format: DD/MM/YYYY
let name = User.getProperty("name");

// Validate DOB and name
if (!dob || !/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
  Bot.sendMessage("Error: Your date of birth is missing or invalid. Please provide it in DD/MM/YYYY format.");
  return;
}

if (!name) {
  Bot.sendMessage("Error: Your name is missing. Please provide your name.");
  return;
}

// Extract day, month, and year from the DOB
let [day, month, year] = dob.split("/").map(Number);

// Initialize the Loshu Grid
let loshuGrid = { 
  "4": 0, "9": 0, "2": 0,
  "3": 0, "5": 0, "7": 0,
  "8": 0, "1": 0, "6": 0 
};

// Count occurrences of each digit in the DOB
for (let digit of dob.replace(/\D/g, "")) {
  if (loshuGrid[digit] !== undefined) {
    loshuGrid[digit]++;
  }
}

// Helper function to calculate the sum of digits and reduce to a single digit
function reduceToSingleDigit(num) {
  while (num > 9) {
    num = String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

// Calculate Life Path Number (sum of day only, reduced to a single digit)
let lifePathNumber = reduceToSingleDigit(day);

// Add Life Path Number to the grid
if (loshuGrid[lifePathNumber] !== undefined) {
  loshuGrid[lifePathNumber]++;
}

// Calculate Destiny Number (sum of DD + MM + YYYY, reduced to a single digit)
let destinyNumber = reduceToSingleDigit(
  reduceToSingleDigit(day) + 
  reduceToSingleDigit(month) + 
  reduceToSingleDigit(year)
);

// Add Destiny Number to the grid
if (loshuGrid[destinyNumber] !== undefined) {
  loshuGrid[destinyNumber]++;
}

// Calculate Name Number (sum of numerological values of each letter in the name)
let nameNumber = 0;
if (name) {
  let nameValues = {
    A: 1, J: 1, S: 1,
    B: 2, K: 2, T: 2,
    C: 3, L: 3, U: 3,
    D: 4, M: 4, V: 4,
    E: 5, N: 5, W: 5,
    F: 6, O: 6, X: 6,
    G: 7, P: 7, Y: 7,
    H: 8, Q: 8, Z: 8,
    I: 9, R: 9
  };
  name = name.toUpperCase(); // Ensure name is in uppercase for matching
  for (let char of name) {
    if (nameValues[char]) {
      nameNumber += nameValues[char];
    }
  }
  nameNumber = reduceToSingleDigit(nameNumber);
}

// Add Name Number to the grid
if (loshuGrid[nameNumber] !== undefined) {
  loshuGrid[nameNumber]++;
}

// Save results to user properties
User.setProperty("loshuGrid", loshuGrid, "Object");
User.setProperty("lifePathNumber", lifePathNumber, "Number");
User.setProperty("destinyNumber", destinyNumber, "Number");
User.setProperty("nameNumber", nameNumber, "Number");

// Prepare a formatted grid output
let gridOutput = `
🔢 **Loshu Grid**:

4️⃣: ${loshuGrid["4"]}  9️⃣: ${loshuGrid["9"]}  2️⃣: ${loshuGrid["2"]}
3️⃣: ${loshuGrid["3"]}  5️⃣: ${loshuGrid["5"]}  7️⃣: ${loshuGrid["7"]}
8️⃣: ${loshuGrid["8"]}  1️⃣: ${loshuGrid["1"]}  6️⃣: ${loshuGrid["6"]}

🌟 **Special Numbers**:
🔸 Life Path Number: ${lifePathNumber}
🔸 Destiny Number: ${destinyNumber}
🔸 Name Number: ${nameNumber}

🔁 **Repeated Numbers**:
${Object.entries(loshuGrid)
  .filter(([key, value]) => value > 0) // Only include numbers that appear at least once
  .map(([key, value]) => `${key}️⃣: ${value} time(s)`)
  .join("\n")}
`;

// Display the grid and additional numbers to the user
Bot.sendMessage(gridOutput);
Bot.sendMessage("Proceeding to the next step...");
Bot.runCommand("numberInsights");
