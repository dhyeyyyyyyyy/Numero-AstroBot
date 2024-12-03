/*CMD
  command: handleBirthplace
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
  command: handleBirthplace
  help: Collects Birthplace for Astrology
  need_reply: true
  auto_retry_time:
  folder:
CMD*/

let birthplace = message.trim();

if (birthplace.length > 0) {
  User.setProperty("birthplace", birthplace, "string");
  Bot.sendMessage("Thank you! Lastly, please enter your Gender (Male/Female):");
  Bot.runCommand("handleGender"); // Proceed to Gender input
} else {
  Bot.sendMessage("Invalid input. Please enter your Birthplace:");
  Bot.runCommand("handleBirthplace"); // Retry Birthplace input
}

