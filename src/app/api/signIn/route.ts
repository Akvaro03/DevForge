
export async function GET(req: Request) {
    return new Response('Hello from Next.js!')
}
export async function POST(req: Request) {
    const url = await req.json()
    return new Response(JSON.stringify({ name: "funciona" }))
}