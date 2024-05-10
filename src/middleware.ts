import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import getUser from './db/getUser'
import { User } from 'firebase/auth'
import userType from './types/userType'

export default async function middleware(req: NextRequest) {
    const { user }: { user: userType | null } = getUser()
    setTimeout(() => {
        
    }, 2000);
    const url = req.url.split("/")
    const localPath = `${url[0]}//${url[1]}/${url[2]}/`

    if (url.includes("saves") && !user) {
        console.log(user)
        return NextResponse.redirect(localPath + "signIn")
    }
}
