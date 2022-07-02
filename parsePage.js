
import puppeteer from 'puppeteer';
import cheerio from "cheerio";

export const PAGE_PUPPETEER_OPTS = {
    waitUntil: 'networkidle2',
    headless: false
};

export async function getPageContent(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage(PAGE_PUPPETEER_OPTS)
    await page.goto(url, PAGE_PUPPETEER_OPTS)
    const content = await page.content();
    browser.close();

    let $ = cheerio.load(content);

    return $;
}

