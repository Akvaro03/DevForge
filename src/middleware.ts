import useGetUser from '@/hooks/useGetUser'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import userType from './types/userType'

export default function middleware(req: NextRequest) {
    const { user }: { user: null | userType } = useGetUser()
    const url = req.url.split("/")
    const localPath = `${url[0]}//${url[1]}/${url[2]}/`

    if (url.includes("saves") && !user) {
        return NextResponse.redirect(localPath + "signIn")
    }
}
