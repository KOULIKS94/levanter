const axios = require("axios");

module.exports = {
  name: "fact",
  alias: ["randomfact", "funfact"],
  desc: "Get a random fun fact",
  category: "fun",
  usage: ".fact",
  async execute(m, { conn }) {
    try {
      let response = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
      let fact = response.data.text;

      await conn.sendMessage(m.chat, { text: `🧠 *Did you know?* \n\n${fact}` }, { quoted: m });
    } catch (err) {
      console.error("Fact Plugin Error:", err);
      return m.reply("❌ Could not fetch a fact. Try again!");
    }
  }
};
