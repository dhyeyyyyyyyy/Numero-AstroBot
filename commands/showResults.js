/*CMD
  command: showResults
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

let lifePathNumber = User.getProperty("lifePathNumber");
let destinyNumber = User.getProperty("destinyNumber");
let nameNumber = User.getProperty("nameNumber");

Bot.sendMessage(`
🎉 **Your Full Results**:

1️⃣ **Life Path Number**: ${lifePathNumber}
2️⃣ **Destiny Number**: ${destinyNumber}
3️⃣ **Name Number**: ${nameNumber}

Thank you for using the bot! 🌟
`);
