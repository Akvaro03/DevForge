import Style from "./headerComponent.module.css"
import LoginIcon from '@mui/icons-material/Login';
import LinkCustom from '../LinkCustom';
import Link from "next/link";
function HeaderComponent() {
    return (
        <header className={Style.containerHeader}>
            <h1 className={Style.tittleHeader}>
                <Link href={"/"}>
                    Dev<span>Forges</span>
                </Link>
            </h1>
            <section className={Style.containerButtons}>
                <LinkCustom url='/singIn' tittle='Sing in' icon={<LoginIcon style={{ rotate: "180deg" }} />} />
                <LinkCustom url='/login' tittle='Login' />
            </section>
        </header>
    );
}

export default HeaderComponent;