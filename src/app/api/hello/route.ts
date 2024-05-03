import puppeteer from 'puppeteer-core'; // O 'puppeteer' si tienes Puppeteer instalado globalmente

export async function GET(req: Request) {
    return new Response('Hello from Next.js!')
}
export async function POST(req: Request) {
    const url = await req.json().then(data => data.url)
    try {
        const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        // await page.goto(url);
        // const screenshot = await page.screenshot();
        // await browser.close();

    } catch (error) {
        return new Response(JSON.stringify({ name: error }))
    }



    return new Response(JSON.stringify({ name: "screenshot" }))
}