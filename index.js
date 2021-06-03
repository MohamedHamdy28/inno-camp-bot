const { Telegraf } = require('telegraf')

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    console.log(client.topology.clientInfo);
    client.close();
    const db = client.db("testdb");
    db.listCollections().toArray().then((docs) => {
        console.log('Available collections:');
        docs.forEach((doc, idx, array) => { console.log(doc.name) });
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        client.close();
    });
});

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
