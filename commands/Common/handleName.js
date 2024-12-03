/*CMD
  command: handleName
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Common

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: handleName
  help: Handles name input for both workflows
  need_reply: true
  auto_retry_time:
  folder:
CMD*/

let name = message;

if (name.trim().length > 0) {
  User.setProperty("name", name, "string");
  Bot.sendMessage("Great! Now, please enter your Date of Birth in DD/MM/YYYY format:");
  Bot.runCommand("handleDob"); // Proceed to DOB input
} else {
  Bot.sendMessage("Invalid name. Please enter your full name:");
  Bot.runCommand("handleName"); // Retry name input
}

