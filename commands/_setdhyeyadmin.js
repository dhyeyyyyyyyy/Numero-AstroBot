/*CMD
  command: /setdhyeyadmin
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

Bot.setProperty("id",user.telegramid)
var hi = Bot.getProperty("id")
Bot.sendMessage("Admin Id Set Successfully `"+hi+"`")

