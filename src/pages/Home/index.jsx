import { ButtonContent, Container, LogoContainer, PrimeContent } from "./styles";
import { Button } from "@material-ui/core"
import { Redirect, useHistory } from "react-router";
import Logo from "../../components/logo";


export default function Home({authenticated}) {

    const history = useHistory();

    const handlePath = (path) => {
        return history.push(path)
    }

    if (authenticated) {
        return <Redirect to="/dashboard"/>
    }

    return (
        <Container>
            <PrimeContent>
                <LogoContainer>
                    <Logo/>
                </LogoContainer>
                <ButtonContent>
                    <span>Já possui uma conta?</span>
                    <Button variant="contained"onClick={() => handlePath("/login")}>Login</Button>
                    <span>Novo por aqui?</span>
                    <Button variant="contained" onClick={() => handlePath("/signup")}>Signup</Button>
                </ButtonContent>
            </PrimeContent>
        </Container>
    )
}
