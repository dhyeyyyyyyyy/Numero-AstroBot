/*CMD
  command: handleAstrologyDetails
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
  command: handleAstrologyDetails
  help: Collects Astrology-specific details
  need_reply: true
  auto_retry_time:
  folder:
CMD*/

if (!User.getProperty("birthplace")) {
  // Collect Birthplace
  let birthplace = message.trim();
  if (birthplace.length > 0) {
    User.setProperty("birthplace", birthplace, "string");
    Bot.sendMessage("Thank you! Now, please enter your Birth Time (HH:MM):");
    Bot.runCommand("handleBirthTime");
  } else {
    Bot.sendMessage("Invalid birthplace. Please enter your Birthplace:");
    Bot.runCommand("handleAstrologyDetails");
  }
}

