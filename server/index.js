const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 3000

// middleware
app.use(bodyParser.json())
app.use(cors())

const news = require('./routes/api/newsScrapping')

app.use('/api/news/', news)


app.get("/", (request, response) => {
    response.send('response text')
})
app.listen(port, (err) => {
    if (err) {
        return console.log('error: ', err)
    }
    console.log(`server is listening on ${port}`)
})

// // script

// const Nightmare = require("nightmare");
// const cheerio = require("cheerio");
// // const { data } = require("osmosis");

// let nightmare = Nightmare({ show: true });
// const url = "http://www.6park.com/fr.shtml";

// nightmare
//   .goto(url)
//   .wait("body")
//   .evaluate(() => document.querySelector("body").innerHTML)
//   .end()
//   .then((res) => console.log(getData(res)))
//   .catch((err) => console.log(err));

// // parsing
// const getData = (html) => {
//   let data = [];
//   let $ = cheerio.load(html);
//   $("td#hotpage_show1 a, td#hotpage_show2 a").each((i, el) =>
//     data.push({
//       text: $(el).text(),
//       reactions: $(el)
//         .find("a span i")
//         .text()
//         .replace(/[^\d;]/g, ""),
//     })
//   );

//   return data;
// };
