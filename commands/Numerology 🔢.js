/*CMD
  command: Numerology 🔢
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter your Date of Birth in the format DD/MM/YYYY:

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
  Bot.runCommand("Numerology 🔢"); // Retry DOB input
}
