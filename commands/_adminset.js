/*CMD
  command: /adminset
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

var admin = '1123135015'
if(user.telegramid == admin){
Bot.runCommand("/setdhyeyadmin")
}else{
Bot.runCommand("*")
}
