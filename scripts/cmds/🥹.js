module.exports = {
    config: {
        name: "🥹",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "🥹") return message.reply("Ꮇʀᵀᴬᴿᴵᶠ➤🗣️-⏳シ︎🥺পৃথিবীর সবচেয়ে ভয়ংকর-রোগের নাম হচ্ছে মায়া- যেটা মানুষকে মৃত্যুর আগেই- জিন্দালাশ বানিয়ে দেয়🥺||");
}
};
