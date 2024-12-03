/*CMD
  command: handleBirthTime
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
  command: handleBirthTime
  help: Collects Birth Time for Astrology
  need_reply: true
  auto_retry_time:
  folder:
CMD*/

let birthTime = message.trim();
let timePattern = /^\d{2}:\d{2}$/;

if (timePattern.test(birthTime)) {
  User.setProperty("birthTime", birthTime, "string");
  Bot.sendMessage("Thank you! Now, please enter your Birthplace:");
  Bot.runCommand("handleBirthplace"); // Proceed to Birthplace input
} else {
  Bot.sendMessage("Invalid time format. Please enter your Birth Time in HH:MM format:");
  Bot.runCommand("handleBirthTime"); // Retry Birth Time input
}

