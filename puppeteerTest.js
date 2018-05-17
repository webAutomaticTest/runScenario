const puppeteer = require('puppeteer');

async function test() {
  const browser = await puppeteer.launch({headless: false, args:['--no-sandbox']});
  const page = await browser.newPage();

  await page.goto('https://www.baby-connect.com/login');
  await page.type('#email', '925772927@qq.com');
  await page.type('#pass', '123456');
  await page.waitFor(1000);
  await page.click('#save');
  await page.waitFor(1000);
  await page.click('#kid6704816061153280 > a');
  await page.click('a[href="javascript:showBibDlg()"]');
  await page.click('#bibMilk');

  await page.type('.ui-autocomplete-input', '10');
 
  await page.click('.defaultDlgButton');

  // await browser.close();
}

test();