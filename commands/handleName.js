/*CMD
  command: handleName
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


let name = message;

if (name.trim().length > 0) {
  User.setProperty("name", name, "string");
  Bot.sendMessage("Thank you! Now calculating your Numerology details...");
  Bot.runCommand("/update"); // Proceed to calculate numbers
} else {
  Bot.sendMessage("Invalid name. Please enter your full name:");
  Bot.runCommand("handleName"); // Retry name input
}
