/*CMD
  command: /deleteMsg
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

if (!options || !options.message_id) {
    Api.sendMessage({ text: "" });
    return;
}

Api.deleteMessage({
    chat_id: chat.chat_id,
    message_id: options.message_id
});
