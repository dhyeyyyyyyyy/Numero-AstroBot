/*CMD
  command: @
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

if(user.telegramid!="1123135015"){
var maintanancemode = Bot.getProperty("maintanancemode","off")

if(maintanancemode == "on"){
Bot.sendMessage("⚠️ _Maintenance Alert!_ ⚠️ \nOur numerology bot will be down for maintenance from [Now] to [Untill Bot gets updated perfectly].\n~ @dhyeygotyou\nIf you want to contact admin then use /support")
return
}
}

