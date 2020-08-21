const express = require("express");
const router = express.Router();

const cheerio = require("cheerio");
const getContent = require("../../helpers/puppeteer.js");

const URL = "https://www.6park.com/fr.shtml";

const newsItems = [];


(async function main() {
  try {
    const pageContent = await getContent(URL);

    const $ = cheerio.load(pageContent);

    $("td#hotpage_show3 a, td#hotpage_show4 a").each((i, el) => {
      newsItems.push({
        text: $(el).text(),

        comments:
          $(el)
            .text()
            .slice(-1) === "评"
            ? $(el)
                .find("a span i")
                .text()
                .replace(/[^\d;]/g, "")
            : 0,
        likes:
          $(el)
            .text()
            .slice(-1) === "赞"
            ? $(el)
                .find("a span i")
                .text()
                .replace(/[^\d;]/g, "")
            : 0,
      });
    });

  } catch (err) {
    console.log(err);
  }
})();

router.get("/", async (req, res) => {
  res.send(newsItems);
});

module.exports = router;
