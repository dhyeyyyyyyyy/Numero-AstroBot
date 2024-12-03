/*CMD
  command: calculatePlanetPositions
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
  command: calculatePlanetPositions
  help: Calculate planetary positions for Vedic Astrology
  need_reply: false
  auto_retry_time:
  folder:
CMD*/

let { day, month, year, hours, minutes, birthplace, name } = options;

// Step 2: Calculate Julian Day Number (JDN)
let JDN =
  Math.floor((1461 * (year + 4800 + (month - 14) / 12)) / 4) +
  Math.floor((367 * (month - 2 - 12 * ((month - 14) / 12))) / 12) -
  Math.floor((3 * ((year + 4900 + (month - 14) / 12) / 100)) / 4) +
  day -
  32075;

// Step 3: Calculate Julian Century
let T = (JDN - 2451545) / 36525;

// Step 4: Calculate Planet Positions
let planets = {
  Sun: 279.46457166 + 0.98564736629 * T - 0.00001450624 * T ** 2,
  Moon: 218.3164478 + 13.06499366 * T - 0.00006036524 * T ** 2,
  Mercury: 168.6562115 + 4.092334767 * T - 0.00003052824 * T ** 2,
  Venus: 212.6032192 + 1.602130224 * T - 0.00001250524 * T ** 2,
  Mars: 282.9398451 + 0.5240207766 * T - 0.00000614424 * T ** 2,
  Jupiter: 273.8775268 + 0.0830918273 * T - 0.00000090224 * T ** 2,
  Saturn: 282.3394896 + 0.0334446279 * T - 0.00000037524 * T ** 2,
  Uranus: 238.9654749 + 0.0117258069 * T - 0.00000006624 * T ** 2,
  Neptune: 260.1055533 + 0.0057821521 * T - 0.00000002324 * T ** 2,
};

// Step 5: Convert Planet Positions to Vedic Zodiac Coordinates
let ayanamsa = 23.86933333 + 0.01300416667 * T;

Object.keys(planets).forEach((planet) => {
  let siderealLongitude = (planets[planet] + ayanamsa) % 360;
  let zodiacSign = Math.floor(siderealLongitude / 30) + 1;
  let degree = siderealLongitude % 30;
  let minute = (degree % 1) * 60;
  let second = ((minute % 1) * 60).toFixed(2);

  planets[planet] = {
    siderealLongitude,
    zodiacSign,
    degree: Math.floor(degree),
    minute: Math.floor(minute),
    second,
  };
});

// Step 6: Calculate Ascendant (Lagna)
let lagna = (hours * 15 + minutes / 4) % 360;

// Step 7: Determine House Positions
let houses = Array.from({ length: 12 }, (_, i) => (lagna + i * 30) % 360);

// Save results
User.setProperty("planets", planets, "json");
User.setProperty("houses", houses, "json");

Bot.sendMessage(`Debug Info: Calculating planets for JDN=${JDN}, T=${T}`);
Object.keys(planets).forEach((planet) => {
  Bot.sendMessage(`${planet} Position: ${JSON.stringify(planets[planet])}`);
});

// Proceed to display results
Bot.runCommand("showJanamKundli");

