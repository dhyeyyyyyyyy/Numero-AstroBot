/*CMD
  command: /maintanancemode
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
Bot.sendMessage('u r not a admin')
return}
var format_error_text = "Incoorect Format\nuse `/maintanancemode on` or `/maintanancemode off`"

if(!params){
Bot.sendMessage(format_error_text)
return
}

if(params != "on"  &&  params != "off"){
Bot.sendMessage(format_error_text)
return
}

Bot.setProperty("maintanancemode",params,"string")

Bot.sendMessage("Maintanance mode set to : " + params)

