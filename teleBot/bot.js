const TelegramBot = require("node-telegram-bot-api");
const mongoose = require("mongoose");


// const TelegramBot = require("node-telegram-bot-api");

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(BOT_TOKEN, { polling: true });


// Your web app URLs (replace with real ones or localhost tunnel for testing)

// Your React app URL (deployed or localhost tunnel for testing)
const WEBAPP_URL = "https://tetrisfrontend.bonzi.xyz/";
const ABOUT_URL = "https://yourapp.com/announcements";
const TWITTER_URL = "https://x.com/StringMetaverse?t=ZPbjFosMERrMFwLNIAia5g&s=35";
const COMMUNITY_URL = "https://t.me/Tetris_Testt_Bot";
const ANNOUNCEMENT_URL = "https://t.me/Tetris_Testt_Bot";




bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, "https://ibb.co/wFxzGxxJ", {
     caption: `
🎮 Join Tetris and Start Earning String Tokens 🎮

First Play 2 Earn Game on Telegram with Instant Withdraw to TON 

How to Earn Tokens:
- Play Games💎
- Complete Daily Tasks 📝
- Invite Friends 👥 (1 Invite = $0.05 USDT)

100k Tokens = $1 USDT

Join now and Start winning FREE USDT (TON Network)
    `,
  }).then(() => {
    // Step 2: Send inline buttons


  // Send message with Play button
  bot.sendMessage(chatId, "Welcome! Click Play to start:", {
    reply_markup: {
inline_keyboard: [
        
          // [
          //   { text: "📢 Announcement", url: ANNOUNCEMENT_URL },
            // { text: "🧾 About", url: ABOUT_URL },
          // ],
          [
            { text: "X (Twitter)", url: TWITTER_URL },
            { text: "💬 Community", url: COMMUNITY_URL },
            { text: "📢 Announcement", url: ANNOUNCEMENT_URL },
          ],
            [
            {
              text: "🎮 Play",
              web_app: { url: WEBAPP_URL },
            },
          ],
        ],
      },
    });
  });
  });

