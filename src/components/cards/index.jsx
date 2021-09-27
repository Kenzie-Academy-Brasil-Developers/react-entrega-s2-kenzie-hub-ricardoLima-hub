import { Button } from "@material-ui/core"
import { Container } from "./styles"

export default function Cards({title, status, onClick}) {
    return (
        <Container>
            <h3>
                {title}
            </h3>
            <hr />
            <h3>
                {status}
            </h3>
            <Button onClick={onClick} variant="contained" size="large">Deletar</Button>
        </Container>
    )
}
