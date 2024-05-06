import Style from "./headerComponent.module.css"
import LoginIcon from '@mui/icons-material/Login';
import LinkCustom from '../LinkCustom';
import Link from "next/link";
import CustomBottom from "../customBottom";
function HeaderComponent() {
    return (
        <header className={Style.containerHeader}>
            <h1 className={Style.tittleHeader}>
                <Link href={"/"}>
                    Dev<span>Forges</span>
                </Link>
            </h1>
            <section className={Style.containerButtons}>
                <span className={Style.linkHeader}>
                    <LinkCustom url={"/"}>
                        <p>Explore</p>
                    </LinkCustom>
                </span>
                <span className={Style.linkHeader}>
                    <LinkCustom url={"/saves"}>
                        <p>Saves</p>
                    </LinkCustom>
                </span>
                <LinkCustom
                    url='/createAccount'>
                    <CustomBottom tittle={"Create Account"} />
                </LinkCustom>
                <LinkCustom
                    url='/singIn'
                >
                    <CustomBottom icon={<LoginIcon style={{ rotate: "180deg" }} />} tittle={"Sing in"} />
                </LinkCustom>
            </section>
        </header>
    );
}

export default HeaderComponent;