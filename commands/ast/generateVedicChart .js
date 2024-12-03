/*CMD
  command: generateVedicChart 
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ast
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

/*CMD
  command: generateVedicChart
  help: Generates the Vedic Astrology chart
  need_reply: false
  auto_retry_time:
  folder:
CMD*/

let dob = User.getProperty("dob");
let birthTime = User.getProperty("birthTime");
let birthplace = User.getProperty("birthplace");
let name = User.getProperty("name");
let gender = User.getProperty("gender");

if (!dob || !birthTime || !birthplace || !name || !gender) {
  Bot.sendMessage("Error: Missing user data. Please restart the bot and provide all details.");
  return;
}

// Debug message to confirm properties
Bot.sendMessage(
  `Debug Info:\nName: ${name}\nDOB: ${dob}\nBirth Time: ${birthTime}\nBirthplace: ${birthplace}\nGender: ${gender}`
);

// Proceed to planetary calculation
Bot.sendMessage("Calculating planetary positions...");
Bot.run({
  command: "calculatePlanetPositions",
  options: { dob, birthTime, birthplace, name, gender },
});

