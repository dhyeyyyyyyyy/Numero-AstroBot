/*CMD
  command: handleDob
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
  command: handleDob
  help: Handles DOB input and branches workflows
  need_reply: true
  auto_retry_time:
  folder:
CMD*/

let dob = message;
let dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;

if (dobPattern.test(dob)) {
  User.setProperty("dob", dob, "string");
  let workflow = User.getProperty("workflow");

  if (workflow === "Astrology") {
    Bot.sendMessage("Thank you! Now, please enter your Birth Time in HH:MM format:");
    Bot.runCommand("handleBirthTime"); // Proceed to Astrology-specific inputs
  } else if (workflow === "Numerology") {
    Bot.sendMessage("Thank you! Now calculating your Numerology details...");
    Bot.runCommand("/update"); // Proceed to Numerology workflow
  } else {
    Bot.sendMessage("Error: Invalid workflow. Please restart the bot.");
  }
} else {
  Bot.sendMessage("Invalid DOB format. Please enter your Date of Birth in DD/MM/YYYY format:");
  Bot.runCommand("handleDob"); // Retry DOB input
}

