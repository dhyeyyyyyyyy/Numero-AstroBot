/*CMD
  command: handleGender
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ast
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

/*CMD
  command: handleGender
  help: Collects Gender and concludes Astrology setup
  need_reply: true
  auto_retry_time:
  folder:
CMD*/

let gender = message.trim().toLowerCase();

if (["male", "female"].includes(gender)) {
  User.setProperty("gender", gender, "string");
  Bot.sendMessage("Thank you! Generating your Astrology chart...");
  Bot.runCommand("generateVedicChart"); // Proceed to chart generation
} else {
  Bot.sendMessage("Invalid input. Please enter your Gender (Male/Female):");
  Bot.runCommand("handleGender"); // Retry Gender input
}

