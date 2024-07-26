//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "255768619068";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5LdGdwVGdTTGcwKytkQVFMMGYra09lS0NQbFZ3Sks1WE5LMEV1clpWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjdFVld6bHRpcWNOMnc1ZjZmL2RNTHVCVFo5ZlN5QjNzdy9KWjMwR1ZWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTnNKWDRSY3MvZWpzam95U2xyeHJFdUlYRmtWWCtUaTJsVkJTK0l3YldZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZFhtZ0FNUEwxWjBTZzFEOGptZDVnTTdEQ3BrNmo4SG8xS3hIS2NYREVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOYWJoaFNnZXVIZDZrZk9aMXR4cGgrNGF3YzJmeWxLTVE1UGlNZWkyRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBYUhDalBVWnFaVkRVS0ZkeGx6RnhBU2F1V1NsTlJRY0EwcTA5bnQrbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtQQk5PR0pENmRIRnpxK1NCcVJHZTlwUjBEUldwSnpoUE9OME1tNS9YOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlwTUtIOUEyMGJreFpTR1NjZURIMEdScmZ0UFFuTVVGdjl0M1dMVWhoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkptSXZHS3cwL2Q2WDN1MW9qR2N0blF3aHpTclNXemNtOFE0UjY2VjlwelZBOW1JVHUvTWMra08vZjBqTUllSDcrMlpaZlVRUTNZUkkyeE5ZRnBxMUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6ImtNZWxxR2xmbld4UW9XT0crRTIyYW0vWXhPQWk5WXBBNThOWFFqMFkzOTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzY4NjE5MDY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBGODBEMUMzMEJCMTg1NDA2MzlDRERBNUQxNzlBN0RFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5Nzk0NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc2ODYxOTA2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4Q0VGRjMwRTUzNkY5MkNBODBBNDZGM0IxQTE4QzA2RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTc5NDcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3Njg2MTkwNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODU3RTk2NzBGRkQ0MDk1RkE3QzlDRDRBOUNFMTZBQzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTk3OTQ3NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzY4NjE5MDY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU1MkQ5OUFERTg1OEMwQzhEODcxMDY3NDE4MUQ1Q0JEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5Nzk0NzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJZMkZhN3huU0dlaEJyaGduaDNWR2ciLCJwaG9uZUlkIjoiNmY0ZjI5NTgtYjAzMS00NzZmLThmZjItMjc5NTJhMWE3NGEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpCaUhraTZYdzRnSk5NeEFndEtNdndZUEhlcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabkhBWHdiR0JDL2RzOVdOUTRJQkpOWmplbGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFhNTThCUDYiLCJtZSI6eyJpZCI6IjI1NTc2ODYxOTA2ODoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMdWN2b2ljZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmVCNVU0UXY2U050UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMjdLVEtmR2U3TEczcGwrZ1EwR3B1Q3JGZUJsakxkSjQ2U2xoVnpoajRCaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiby9MNzhyZThCdEpiTEdBZmVEZGRrNTRjT0w2QnJyZHQ4eWVFK1dSZmxHblNXS0VxWlBOSklTelZmaDZzZnZzN1BOOTF6SUV3Yy9veW00ZzNIbkEyQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJpcDNYM3lLdkpnb2lQR2VCYkFFRE9HQThDRnIvZEIzVW4yTXIwREJDL3Fid2pJOS9aZXVOK21QYXFqUUNlQXJEYXB4Mi96Qm0vOVV4Q0o3cWl3Z0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzY4NjE5MDY4OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR1eWt5bnhudXl4dDZaZm9FTkJxYmdxeFhnWll5M1NlT2twWVZjNFkrQVoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5Nzk0NzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFp3In0=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


