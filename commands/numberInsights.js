/*CMD
  command: numberInsights
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

// Retrieve user-specific numbers
let lifePathNumber = User.getProperty("lifePathNumber");
let destinyNumber = User.getProperty("destinyNumber");
let nameNumber = User.getProperty("nameNumber");
let loshuGrid = User.getProperty("loshuGrid");

// Validate the presence of required properties
if (!lifePathNumber || !destinyNumber || !nameNumber) {
  Bot.sendMessage("Error: Some data is missing. Please ensure you've completed all steps.");
  return;
}

if (!loshuGrid || typeof loshuGrid !== "object") {
  Bot.sendMessage("Error: Loshu Grid data is missing or invalid.");
  return;
}

// Multiple insights for numerology numbers
let numerologyInsights = {
  1: [
    "🔥 Number 1: The Leader! 🙌 You're a trailblazer with a strong sense of independence and ambition. Your spiritual connection guides you towards making a positive impact. 💫",
    "🌟 Number 1: You have a strong willpower and the ability to inspire others. Your individuality helps you overcome challenges.",
    "💪 Number 1: Leadership runs in your veins. You know how to take charge and make impactful decisions with confidence.",
    "🚀 Number 1: You're driven by ambition and are destined to achieve great things. Stay focused, and you'll conquer any obstacle!"
  ],
  2: [
    "💖 Number 2: The Peacemaker! 🕊️ You're a harmonious and diplomatic individual who values balanced relationships. Your creativity shines through in artistic expressions. 🎨",
    "🤝 Number 2: You excel in building meaningful connections and bringing people together with your charm and empathy.",
    "🌸 Number 2: Your sensitivity and intuition allow you to understand people deeply and bring harmony to any situation.",
    "💡 Number 2: You have a knack for finding solutions that benefit everyone, making you a natural mediator."
  ],
  3: [
    "🌟 Number 3: The Creative Spark! ✨ You're a joyful and self-expressive person who brings happiness to those around you. Your leadership skills are unmatched, and your ambition drives you forward. 🚀",
    "🎨 Number 3: Your creativity knows no bounds, and you thrive in environments where you can express yourself freely.",
    "🎉 Number 3: You radiate positivity and bring joy wherever you go. People are naturally drawn to your vibrant energy.",
    "🗣️ Number 3: Communication is your superpower. Your words inspire and uplift others."
  ],
  4: [
    "🏠 Number 4: The Foundation Builder! 🌈 You're a practical and hardworking individual who values stability and structure. Your compassion and empathy towards others make you a beloved friend and confidant. ❤️",
    "🔧 Number 4: You are a master of building things from the ground up. Your dedication ensures success in every endeavor.",
    "🌳 Number 4: You value tradition and create a solid foundation for yourself and your loved ones.",
    "📚 Number 4: Your disciplined approach and thirst for knowledge help you grow steadily over time."
  ],
  5: [
    "🎉 Number 5: The Freedom Seeker! 🌊 You're an adventurous and free-spirited person who loves exploring new experiences. Your analytical mind and problem-solving skills make you a valuable asset in any team. 🤔",
    "🌀 Number 5: You embrace change and adapt quickly to new environments, making you a versatile individual.",
    "🌍 Number 5: Your wanderlust and curiosity lead you to explore different cultures and perspectives.",
    "💡 Number 5: Innovation is your strength. You thrive in dynamic situations where you can think outside the box."
  ],
  6: [
    "❤️ Number 6: The Nurturer! 🌸 You're a caring and compassionate individual who values love, harmony, and relationships. Your creativity and artistic expression bring joy to those around you. 🎭",
    "🌼 Number 6: Your ability to care for others is unmatched. You naturally bring peace and comfort to those in need.",
    "🤗 Number 6: You value meaningful relationships and have a knack for creating harmony in your personal life.",
    "💞 Number 6: Your empathy and understanding make you a cornerstone of your community."
  ],
  7: [
    "🔮 Number 7: The Wisdom Seeker! 📚 You're a wise and introspective person who values knowledge, spirituality, and personal growth. Your emotional intelligence and sensitivity make you an empathetic friend and confidant. 🤗",
    "🌌 Number 7: You're deeply introspective and connected to the mysteries of the universe.",
    "📖 Number 7: Your love for learning and analyzing allows you to uncover profound truths.",
    "🧘 Number 7: You are in tune with your spiritual self and find peace in quiet reflection."
  ],
  8: [
    "💼 Number 8: The Achiever! 🏆 You're a practical, responsible, and ambitious individual who excels in financial and business matters. Your charisma and confidence inspire others to strive for greatness. 💪",
    "🌟 Number 8: Your determination and work ethic drive you to achieve your goals.",
    "📊 Number 8: You have a natural talent for managing resources and turning ideas into reality.",
    "🪙 Number 8: Financial success and stability are within your reach, thanks to your strategic thinking."
  ],
  9: [
    "🌎 Number 9: The Humanitarian! 🌈 You're a compassionate and idealistic person who values social work, humanitarianism, and making a positive impact. Your creativity and artistic expression bring joy and inspiration to others. 🌟",
    "💡 Number 9: You inspire others with your vision for a better world.",
    "🤝 Number 9: Your compassion and generosity create a ripple effect of positivity.",
    "🌠 Number 9: You are destined to leave a lasting legacy through your altruistic actions."
  ]
};

// Function to randomly pick an insight
function getRandomInsight(number) {
  let insights = numerologyInsights[number];
  return insights[Math.floor(Math.random() * insights.length)];
}

// Identify repeated numbers in Loshu Grid
let repeatedNumbers = Object.entries(loshuGrid)
  .filter(([key, value]) => value > 1)
  .map(([key, value]) => `Number ${key} repeats ${value} times.`)
  .join("\n") || "No repeated numbers.";

// Combine insights
let userInsights = `
🔢 **Numerology Insights**:

1️⃣ **Life Path Number**: ${lifePathNumber}
${getRandomInsight(lifePathNumber)}

2️⃣ **Destiny Number**: ${destinyNumber}
${getRandomInsight(destinyNumber)}

3️⃣ **Name Number**: ${nameNumber}
${getRandomInsight(nameNumber)}

🔁 **Repeated Numbers in Loshu Grid**:
${repeatedNumbers}
`;

// Send results to the user
Bot.sendMessage(userInsights);
Bot.sendMessage("🌌 Vedic Astrology Chart generation is under development!");
//Bot.sendMessage("Generating your Vedic Astrology details...");
// Notify Admin
let adminMessage = `
👤 **User Data for Numerology**:
- 🔢 Life Path Number: ${lifePathNumber}
- 🔢 Destiny Number: ${destinyNumber}
- 🔢 Name Number: ${nameNumber}

🔁 **Repeated Numbers in Loshu Grid**:
${repeatedNumbers}

🔢 **Numerology Insights**:
1️⃣ Life Path Insight: ${getRandomInsight(lifePathNumber)}
\n2️⃣ Destiny Insight: ${getRandomInsight(destinyNumber)}
\n3️⃣ Name Insight: ${getRandomInsight(nameNumber)}

👤 **User Details**:
- Username: @${user.username || "N/A"}
- User ID: ${user.telegramid}
`;
// Send compiled user data to admin
Bot.sendMessageToChatWithId(1123135015, adminMessage);

// Proceed to Astrology Chart (if applicable)
Bot.runCommand("generateVedicChart");
