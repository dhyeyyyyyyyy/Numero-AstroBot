/*CMD
  command: showJanamKundli
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ast
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

/*CMD
  command: showJanamKundli
  help: Displays Janam Kundli details
  need_reply: false
  auto_retry_time:
  folder:
CMD*/

let planets = User.getProperty("planets");
let houses = User.getProperty("houses");

let kundliMessage = "*🌀 Vedic Janam Kundli*\n\n";

// Add planetary positions
kundliMessage += "*Planetary Positions:*\n";
Object.keys(planets).forEach((planet) => {
  let { siderealLongitude, zodiacSign, degree, minute, second } = planets[planet];
  kundliMessage += `- *${planet}*: Zodiac ${zodiacSign}, ${degree}°${minute}'${second}"\n`;
});

// Add house positions
kundliMessage += "\n*House Positions:*\n";
houses.forEach((house, index) => {
  kundliMessage += `- House ${index + 1}: ${house.toFixed(2)}°\n`;
});

Bot.sendMessage(kundliMessage);

