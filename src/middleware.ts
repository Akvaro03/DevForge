import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import userType from './types/userType'
import getUser from './db/getUser'

export default function middleware(req: NextRequest) {
    const { user }: { user: null | userType } = getUser()
    const url = req.url.split("/")
    const localPath = `${url[0]}//${url[1]}/${url[2]}/`

    if (url.includes("saves") && !user) {
        return NextResponse.redirect(localPath + "signIn")
    }
}
