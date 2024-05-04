import Link from "next/link";
import CustomBottom from "../customBottom";
import { ReactElement } from "react";

function LinkCustom({ url, tittle, icon, onClick }: { url: string, tittle: string, icon?: ReactElement, onClick?: () => void }) {
    return (
        <Link href={url}>
            <CustomBottom tittle={tittle} icon={icon} onClick={onClick} />
        </Link>
    )
}

export default LinkCustom;