/*CMD
  command: /deleteMsgAfter
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

if (!options || !options.result || !options.result.message_id) {
    Api.sendMessage({ text: "" });
    return;
}

Bot.run({
    command: "/deleteMsg",
    options: { message_id: options.result.message_id },
    run_after: 5
});
