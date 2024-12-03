/*CMD
  command: handleBirthTime
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
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
  Bot.sendMessage("Thank you! Lastly, please enter your Gender (Male/Female):");
  Bot.runCommand("handleGender");
} else {
  Bot.sendMessage("Invalid time format. Please enter your Birth Time (HH:MM):");
  Bot.runCommand("handleBirthTime");
}

