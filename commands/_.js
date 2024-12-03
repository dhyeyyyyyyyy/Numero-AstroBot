/*CMD
  command: *
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

var admin = Bot.getProperty("id"); // Admin ID stored in bot properties

// Check if the message is a reply and the sender is the admin
if (request.reply_to_message && user.telegramid == admin) {
    var fromchatid = user.telegramid;
    var fromsgid = request.message_id;
    var id_sup = Bot.getProperty("id_sup");
    var msg = message;

    Api.forwardMessage({
        chat_id: id_sup,
        from_chat_id: admin,
        message_id: fromsgid
    });
}

// Set the support user ID property for future reference
Bot.setProperty("id_sup", user.telegramid);

var fromchatid = user.telegramid;
var fromsgid = request.message_id;

// Handle forwarded messages
if (request.forward_from) {
    var fromchati = request.forward_from.id;
    var fromsgi = request.message_id;
}

if (request.forward_from_chat) {
    var fromchatid = request.forward_from_chat.id;
    var fromsgid = request.forward_from_message_id;
}

// Send confirmation to the user
Api.sendMessage({
    text: "Bot only Works after /start ",
    on_result: "/deleteMsgAfter"
});

// Clean up message after sending confirmation
Bot.runCommand("/deleteMsgAfter");

// Forward the message to the admin if the sender is not the admin
if (user.telegramid != admin) {
    Api.forwardMessage({
        chat_id: admin,
        from_chat_id: fromchatid,
        message_id: fromsgid
    });
}

// Send an empty message to indicate the operation is complete
Bot.sendMessage("");
