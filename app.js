import cheerio from 'cheerio';

import { getPageContent } from './parsePage.js'

import puppeteer from 'puppeteer';

async function main() {
    let $ = await getPageContent('https://www.firmy.cz/');

    let data = [];

    $('.item a.imgLink').map(async (i, el) => {
        data.push($(el).attr('href'))
    })

    let data2 = [];
for(let i = 0; i < 3;i++) {
    for (let j = 0; j < data.length; j++) {
        // $ = await getPageContent(data[i]);
        $ = await getPageContent(`${data[j]}?page=${i}`);

        $('.companyTitle').map((j, el) => {
            data2.push($(el).attr('href'))
        })
    }
}




    // for(let i = 0; i < data2.length; i++) {
    //     $ = await getPageContent(data2[i]);
    //
    //     $('.detailEmail a').map((i, el) => {
    //         console.log($(el).text())
    //     })
    // }
    //
    // console.log(data3)



    console.log(data2)
}

main();
