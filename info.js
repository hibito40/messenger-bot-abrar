
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "আমি এখন বস আবরার ফাহিম এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
    "আমাকে না ডেকে আমার বস আবরার ফাহিম কে একটা জি এফ দাও-😽🫶🌺",
    "- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস আবরার ফাহিম এর নবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/profile.php?id=100090183762638",
    "-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস আবরার ফাহিম কে দান করেন-🥱🐰🍒",
    "-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস আবরার ফাহিম কে-🐸😾🔪",
    "—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস আবরার ফাহিম এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️",
    "My Creator: Abrar Fahim ❤️ আমি মেসেঞ্জার ROBOT, আমার বস আবরার ফাহিম আমাকে বানিয়েছেন",
  ];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() === "miss you")) {
    return api.sendMessage("আমি তোমাকে রাইতে মিস খাই 🥹🤖", threadID);
  }
  if ((event.body.toLowerCase() === "😘") || (event.body.toLowerCase() === "😽")) {
    return api.sendMessage("কিস দিস না, মুখে গন্ধ আছে! 😷", threadID);
  }

  return api.sendMessage(`${name}, ${rand}`, threadID, messageID);
};

module.exports.run = function({ api, event }) { };
