const lib = require('wat_scenario');
const puppeteer = require('puppeteer');
const winston = require(`winston`);

const scenario = new lib.Scenario();

scenario.addAction(new lib.GotoAction("https://www.baby-connect.com/login"));
scenario.addAction(new lib.TypeAction("#email", "925772927@qq.com"));
scenario.addAction(new lib.TypeAction("#pass", "123456"));
scenario.addAction(new lib.ClickAction("#save"));
scenario.addAction(new lib.ClickAction("#" + "kid6704816061153280" + " > a"));
scenario.addAction(new lib.ClickAction("a[href='javascript:showBibDlg()']"));
scenario.addAction(new lib.ClickAction("#bibMilk"));
scenario.addAction(new lib.TypeAction(".ui-autocomplete-input", false));
scenario.addAction(new lib.TypeAction(".ui-autocomplete-input", "10"));
scenario.addAction(new lib.ClickAction(".defaultDlgButton"));


test();

async function test(){
	let page = await createPage();
	let result = await scenario.run(page);
	console.log(result);
	page.close();
}

async function createPage() {
	let browser;
	let page;

	browser = await puppeteer.launch({headless: false, args:['--no-sandbox']});
	page = await browser.newPage();
	return page;
}
