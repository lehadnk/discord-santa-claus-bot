# General
The simple santa claus bot for discord servers

# Invitation url
https://discordapp.com/oauth2/authorize?&client_id=657822824949481483&scope=bot&permissions=2048

# How to compile
```
npm run compile
```

# How to run
```
cd build
echo 'DISCORD_BOT_TOKEN=<YourToken>' >> .env
pm2 start run.js --name="discord-santa-bot"
```