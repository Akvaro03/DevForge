import userType from "@/types/userType";
interface GetUserHookResult {
    user: userType | null;
}


function getUser(): GetUserHookResult {
    const user: userType | null = exampleUser
    return { user }
}

const exampleUser: userType = {
    email: "alvaroballarini@gmail.com",
    password: "123",
    saves: [{
        "name": "1001 Fonts",
        "categories": [
            "Font"
        ],
        "description": "24,262 free fonts in 13,112 families · Free licenses for commercial use · Direct font downloads · Mac · Windows · Linux.",
        "url": "https://www.1001fonts.com/"
    },
    {
        "name": "10FastFingers",
        "description": "10FastFingers is a website which offers users a way to test and improve their typing speed. Improve your Typing Speed with our Typing Games.",
        "categories": [
            "Typing"
        ],
        "url": "https://10fastfingers.com/",
        "keywords": [
            "typing",
            "typing test",
            "typing game",
            "touch typing",
            "fastest fingers",
            "10 fast fingers",
            "typing competition"
        ]
    },
    {
        "name": "18F Accessibility Guide",
        "categories": [
            "Accessibility"
        ],
        "description": "A simple checklist for determining if your site is accessible.",
        "url": "https://accessibility.18f.gov/checklist/"
    },
    {
        "name": "1LOC",
        "description": "Favorite JavaScript Utilities in single line of code! No more!",
        "categories": [
            "Code Snippet"
        ],
        "keywords": [
            "JavaScript",
            "JavaScript Utilities",
            "one-liner",
            "one-liner javascript"
        ],
        "url": "https://1loc.dev/"
    },
    {
        "name": "1upsaas",
        "description": "A SaaS development kit for Next.js",
        "categories": [
            "Programming",
            "Template"
        ],
        "keywords": [
            "Next.js",
            "Boilerplate",
            "SaaS",
            "React"
        ],
        "url": "https://1upsaas.com/"
    },
    {
        "name": "30 seconds of code",
        "categories": [
            "Code Snippet"
        ],
        "description": "Browse 1078 short code snippets for all your development needs on 30 seconds of code.",
        "url": "https://www.30secondsofcode.org/"
    },
    {
        "name": "3dicons",
        "categories": [
            "Icon"
        ],
        "description": "A collection of over 5000 3D icons and characters with 4k resolution, each icon delivered in 5 color palettes, front and perspective views.",
        "url": "https://www.3dicons.com/"
    },
    {
        "name": "4 day week",
        "categories": [
            "Job"
        ],
        "description": "Software jobs with a better work / life balance.",
        "url": "https://4dayweek.io/"
    },
    {
        "name": "99designs",
        "categories": [
            "Freelance"
        ],
        "description": "The global creative platform for custom graphic design: logos, websites and more. Hire a talented designer or start a design contest. 500k+ happy customers have used 99designs to grow their business.",
        "keywords": [
            "crowdsource",
            "graphic design",
            "design"
        ],
        "url": "https://99designs.com/"
    },
    {
        "name": "A11y Coffee",
        "categories": [
            "Accessibility",
            "Learn"
        ],
        "description": "The introduction on web accessibility for every single web developer.",
        "url": "https://a11y.coffee",
        "keywords": [
            "Accessibility",
            "a11y"
        ]
    },
    {
        "name": "A11Y Style Guide",
        "categories": [
            "Accessibility"
        ],
        "description": "Style guide and pattern library promoting accessible components and WCAG compliance criteria.",
        "url": "https://a11y-style-guide.com/style-guide/"
    },
    {
        "name": "A11ygator",
        "categories": [
            "Accessibility"
        ],
        "description": "An application, a Twitter bot and a browser extension that bites websites to taste their accessibility.",
        "url": "https://a11ygator.chialab.io/"
    },
    {
        "name": "A11yWeekly",
        "categories": [
            "Accessibility",
            "Newsletter"
        ],
        "description": "A weekly dose of web accessibility to help you bring it into your every day work.",
        "url": "https://a11yweekly.com/"
    },
    {
        "name": "Accessible Color Generator",
        "categories": [
            "Accessibility",
            "Color"
        ],
        "description": "A tool for creating color variations on a base color to meet WCAG AA or AAA color contrast ratio guidelines.",
        "url": "https://learnui.design/tools/accessible-color-generator.html"
    },
    {
        "name": "Add3",
        "categories": [
            "Web3",
            "Programming",
            "Startup"
        ],
        "description": "EVM smart contract creation and management for web3 projects - Use Add3 to deploy your smart contracts or dApp project in minutes. Signup today!",
        "url": "https://www.add3.io/",
        "keywords": [
            "crypto",
            "cryptocurrency",
            "web3",
            "no-code",
            "smart contract",
            "token minting",
            "create token",
            "vesting contract",
            "distribution contract",
            "crypto staking",
            "liquidity pool staking",
            "onchain analytics",
            "offchain analytics",
            "blockchain analytics"
        ]
    },
    {
        "name": "AdminMart",
        "categories": [
            "Template"
        ],
        "description": "The Best Free and Premium Admin Templates by AdminMart.",
        "url": "https://adminmart.com/"
    },]
}

export default getUser;