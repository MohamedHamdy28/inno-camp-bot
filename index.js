const dotenv = require("dotenv")
dotenv.config()

const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const db = client.db("database");
//     db.listCollections().toArray().then((docs) => {
//         console.log('Available collections:');
//         docs.forEach((doc, idx, array) => { console.log(doc.name) });
//         client.close();
//     });
// });

client.connect(err => {
    if (err) throw err;
    // perform actions on the collection object
    const db = client.db("chats");
    const collection = db.collection("data");

    collection.findOne(function(err, doc)
        {
            if(doc==null)
            {
                data2 = {name: "data", json: "{}"};
                    collection.insertOne(data2, function(err, result){          
        if(err){
                return console.log(err);
            }
                            console.log(result.ops);
                });
            }
            collection.findOne(function(err, doc)
                {
                    if(doc.json!='["ssss"]')
                    {
                        console.log(doc);
                        data1 = JSON.parse(doc.json);

                        console.log(data1);
                    }
                });
        });
});

bot.start((ctx) => ctx.reply(
    `Start message`
))
bot.help((ctx) => ctx.reply(
    `Help message
    test
    `
))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
