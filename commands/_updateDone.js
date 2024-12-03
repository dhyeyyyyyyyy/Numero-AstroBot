/*CMD
  command: /updateDone
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

let msg_id = options.result.message_id;

// Simulating progress updates
Bot.editMessage("*▰▱▱▱▱▱▱▱▱▱ 0%*", msg_id);
Bot.editMessage("*▰▰▱▱▱▱▱▱▱▱ 11%*", msg_id);
Bot.editMessage("*▰▰▰▱▱▱▱▱▱▱ 22%*", msg_id);
Bot.editMessage("*▰▰▰▰▱▱▱▱▱▱ 33%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▱▱▱▱▱ 44%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▱▱▱▱ 55%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▰▱▱▱ 66%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▰▰▱▱ 77%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▱ 88%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ 99%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ 101%*", msg_id);
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ Done 😉*", msg_id);

// Generate a random time in milliseconds (500ms to 3000ms)
let randomTime = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;

// Convert milliseconds to seconds for user-friendly display
let timeInSeconds = (randomTime / 1000).toFixed(2);

// Display the final message with the random time
Bot.editMessage(`*Generated Numerology Chart 📈*\n_Data analyzed in ${timeInSeconds} seconds_`, msg_id);

Bot.runCommand("calculateNumbers"); // Proceed to calculate numbers
