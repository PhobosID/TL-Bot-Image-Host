const { Telegraf } = require('telegraf');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const Token = "YOUR_BOT_TOKEN_HERE";
const ApiKey = "YOUR_API_KEY_HERE";
const RequestURL = "REQUEST_URL_HERE";
const bot = new Telegraf(Token);

bot.start((ctx) => {
  ctx.reply(
    "Hello, Please send me your Image that you want to Upload! You can send the image as file or plain compressed image."
  );
});

const processImageUpload = async (ctx, fileUrl) => {
  try {
    const response = await axios.get(fileUrl.href, { responseType: 'stream' });
    const tempPath = path.join(__dirname, path.basename(fileUrl.pathname));
    const writer = fs.createWriteStream(tempPath);
    response.data.pipe(writer);

    writer.on('finish', async () => {
      const formData = new FormData();
      formData.append('source', fs.createReadStream(tempPath));
      formData.append('type', 'file');
      formData.append('key', ApiKey);

      const uploadResponse = await axios.post(RequestURL, formData, {
        headers: formData.getHeaders(),
      });

      if (uploadResponse.data && uploadResponse.data.image && uploadResponse.data.image.url) {
        const fileUrl = uploadResponse.data.image.url;
        ctx.reply(`Here is the image URL:\n${fileUrl}`);
      } else {
        ctx.reply('An unexpected error occured during uploading your image. Kindly Wait a Moment. If the issue still persist, Please contact Developer!');
      } fs.unlinkSync(tempPath);
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    ctx.reply('There was an error during uploading your image. Please try again. If the issue still persist, Please contact Developer!');
  }
};

bot.on('photo', async (ctx) => {
  const photo = ctx.message.photo[ctx.message.photo.length - 1];
  const fileId = photo.file_id;
  const fileUrl = await ctx.telegram.getFileLink(fileId);
  await processImageUpload(ctx, fileUrl);
});

bot.on('document', async (ctx) => {
  const file = ctx.message.document;
  const supportedFormats = ['image/png', 'image/jpeg', 'image/jpg'];
  if (supportedFormats.includes(file.mime_type)) {
    const fileUrl = await ctx.telegram.getFileLink(file.file_id);
    await processImageUpload(ctx, fileUrl);
  } else {
    ctx.reply("Apologies, but I can only upload images in PNG and JPG/JPEG formats.");
  }
});

bot.on('video', (ctx) => {
  ctx.reply("Apologies, but I am unable to upload video-type format.");
});

bot.launch(
  console.log("Bot is Ready!")
)
