
# TL-Bot-Image-Host 

![Header](https://static.cdn.phobos.id/assets/project/tl-bot-image-host/header.jpg)

Simple Telegram Bot that helps you generate Image Link/URL for sharing across online, embedding into markdown, and much more.

<p align="center">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">ㅤㅤ
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">ㅤㅤ<br>
<img src="https://img.shields.io/badge/Maintenated-No-red.svg?style=for-the-badge">ㅤㅤ
<img src="https://img.shields.io/badge/Pull_Request-No-red.svg?style=for-the-badge">
</p>

## What to Do Next

Configure your main code and enter your credentials. First to get your Bot Token at [BotFather](https://t.me/BotFather). 

Next is the API Key and URL Request. There are plenty of Free Image Hosting that offers free API access along with its Request URL. Below here is the example of them:

| Hosting Provider             | URL Request                                                                | File URL Format |
| ----------------- | ------------------------------------------------------------------ | ----------------- |
| [IMGBB](https://imgbb.com) | https://imgbb.com/api/1/upload | https://i.ibb.co.com/(folder)/(filename).png |
| [ImgHippo](https://www.imghippo.com) | https://www.imghippo.com/v1/upload | https://i.imghippo.com/files/(filename).png |
| [FreeImageHost](https://freeimage.host)* | https://freeimage.host/api/1/upload | https://iili.io/(filename).png |

You need to register/create your own account there at the Image Hosting in order to generate it's API Key. Any Image uploaded by the API will be available in your account.

*FreeImageHost had problem with their API Key, where every user had the exact same API, making every uploaded image using its API won't appear in your account.
```
6d207e02198a847aa98d0a2a901485a5
```
by technicality, you do not need to register your account there.

## Deployment

Upload all necessary files into your Hosting. Then Install all the dependencies as shown in the `package.json` files.

```bash
npm install
```
After all libraries were installed, next is to run the bot script as shown:
```bash
node index.js
```
## How the Bot Works

![App Screenshot](https://static.cdn.phobos.id/assets/project/tl-bot-image-host/screenshot.jpg)

