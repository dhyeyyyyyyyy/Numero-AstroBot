/*CMD
  command: /start
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

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
Bot.sendMessageToChatWithId(1123135015,"🌎New SoS User\n╰┈➤ Name : "+user.first_name + user.last_name+"\n╰┈➤ Id : "+user.telegramid+"\n╰┈➤ Username : @"+user.username+"")
}
  if (!params) {
  Bot.sendKeyboard(
    "Numerology 🔢, Astrology 🌠\n",   "👋🏻 Hi ["+user.first_name+"](tg://user?id="+user.telegramid+")!\n\nWelcome to the Vedic Astrology and Numerology bot! Let's begin.",
  {disable_web_page_preview: true,is_reply: true
})
  return
}
var id = params.slice(0, 10)
var fil = params.slice(10, 30)
var result = Bot.getProperty(id + "" + fil)
Api.sendDocument({
  document: result.file_id,
  caption:
    "*\nPremium File via : @soslinks\n🗂File Info*\n`———————————————————————`\n📦File Name : *" +
    result.file_name +
    "*\n📊File Size : " +
    result.file_size +
    "\nFile Type : " +
    result.mime_type +
    "",
  parse_mode: "Markdown"
})


Bot.sendMessage("Welcome to the Vedic Astrology and Numerology bot! Let's begin.");
Bot.sendMessage("Please enter your Date of Birth in the format DD/MM/YYYY:");
Bot.runCommand("handleDob");
 // Proceed to handle DOB
