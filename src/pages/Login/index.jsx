import { Paper, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content } from "./styles";
import * as yup from "yup";
import { Link, useHistory, Redirect } from "react-router-dom";
import Logo from "../../components/logo";
import axios from "axios";
import { toast } from "react-toastify";


export default function Login({ authenticated, setAuthenticated }) {

    const myStyle= {
        width: "300px",
        maxWidth: "600px",
        maxHeight: "fit-content",
        paddingBottom: "10px",
        borderRadius: "20px",
    }

    const schema = yup.object().shape({
        email: yup.string().email().required("E-mail obrigatório"),
        password: yup.string().min(6, "Mínimo de 6 dígitos")
                .required("Campo obrigatório"),        
    })

    const history = useHistory();

    const { register, handleSubmit, formState: {errors}} = useForm({resolver : yupResolver(schema)})

    const handleForm = (data) => {
        console.log(data)
        axios
            .post("https://kenziehub.herokuapp.com/sessions", data)
            .then((response) => {
                const { token } = response.data;
                localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
                localStorage.setItem("@KenzieHub:id", JSON.stringify(response.data.user.id))
                setAuthenticated(true);
                return history.push("/dashboard");
            })
            .catch((err) => toast.error("Email ou senha inválidos"));
    }

    if (authenticated) {
        return <Redirect to="/dashboard"/>
    }

    return (
        <Container>
            <Content>
            <Paper style={myStyle}>
                <Logo />
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="Email"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="Senha"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <Button variant="contained" size="large" type="submit">Login</Button>
                </div>
                <span>Não possui uma conta? <Link to="/signup">Clique aqui. </Link> </span>
            </form>
            </Paper>
            </Content>
        </Container>
    )
}

