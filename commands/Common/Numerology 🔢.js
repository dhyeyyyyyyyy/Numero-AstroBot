/*CMD
  command: Numerology 🔢
  help: 
  need_reply: false
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
  command: Numerology 🔢
  help: Initiates Numerology workflow
  need_reply: false
  auto_retry_time:
  folder:
CMD*/

Bot.sendMessage("To begin with Numerology, please enter your full name:");
Bot.runCommand("handleName");
User.setProperty("workflow", "Numerology", "string"); // Track workflow

