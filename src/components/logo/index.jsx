import { LogoContent } from "./styles";
import logo from "../../assets/logo.svg"


export default function Logo() {
    return (
        <LogoContent>
            <img src={logo} alt="Logo" />
            <h1>Kenziehub</h1>
            <span>Organize as suas techs!</span>
        </LogoContent>
    )
}
