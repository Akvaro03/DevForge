import Link from "next/link";
import { ReactElement } from "react";
import { usePathname } from 'next/navigation'

// function LinkCustom({ url, tittle, icon, onClick }: { url: string, tittle: string, icon?: ReactElement, onClick?: () => void }) {
function LinkCustom({ url, children }: { url: string, children: ReactElement }) {
    const pathName = usePathname()
    return (
        <Link style={{ color: url === pathName ? "var(--first-theme)" : "white" }} href={url}>
            {children}
        </Link>
    )
}

export default LinkCustom;