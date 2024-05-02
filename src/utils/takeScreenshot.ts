import puppeteer from "puppeteer"

async function takeScreenshot(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const screenshot = await page.screenshot({ encoding: 'base64' });
    await browser.close();
    return `data:image/png;base64,${screenshot}`;
}

export default takeScreenshot;