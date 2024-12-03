/*CMD
  command: Astrology 🌠
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let dob = message;
let dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;

if (dobPattern.test(dob)) {
  User.setProperty("dob", dob, "string");
  Bot.sendMessage("Great! Now, please enter your full name:");
  Bot.runCommand("handleName"); // Proceed to handle name
} else {
  Bot.sendMessage("Invalid DOB format. Please re-enter your Date of Birth in DD/MM/YYYY format:");
  Bot.runCommand("Astrology 🌠"); // Retry DOB input
}
