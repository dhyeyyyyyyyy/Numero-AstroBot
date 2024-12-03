/*CMD
  command: Astrology 🌠
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: Astrology 🌠
  help: Initiates Astrology workflow
  need_reply: false
  auto_retry_time:
  folder:
CMD*/

User.setProperty("workflow", "Astrology", "string"); // Track workflow
Bot.sendMessage("Let's explore Astrology! Please enter your full name:");
Bot.runCommand("handleName"); // Proceed to shared handleName command

