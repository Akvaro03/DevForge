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
        "name": "Accessibility",
        "slug": "accessibility"
    },
    {
        "name": "AI",
        "slug": "ai"
    },
    {
        "name": "Analytics",
        "slug": "analytics"
    },
    {
        "name": "Animation",
        "slug": "animation"
    }]
}

export default getUser;