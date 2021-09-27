import { Paper, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content } from "./styles";
import * as yup from "yup";
import { Link, useHistory, Redirect } from "react-router-dom";
import Logo from "../../components/logo";
import { toast } from "react-toastify";
import axios from "axios";


export default function Signup({authenticated}) {

    const myStyle= {
        width: "300px",
        maxWidth: "600px",
        maxHeight: "fit-content",
        paddingBottom: "10px",
        borderRadius: "20px",
    }

    const schema = yup.object().shape({
        name: yup.string()
            .required("Nome obrigatório"),
        email: yup.string()
            .email()
            .required("E-mail obrigatório"),
        password: yup.string()
            .min(6, "Mínimo de 6 dígitos")
            .required("Campo obrigatório"),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password")], "Senhas não são iguais")
            .required("Digite a senha novamente"),
        course_module: yup.string()
            .required("Insira qual o módulo atual do curso"),
        bio: yup.string()
            .required("Campo obrigatório"),
        contact: yup.string()
            .required("Campo obrigatório")
    })

    const history = useHistory();

    const { register, handleSubmit, formState: {errors}} = useForm({resolver : yupResolver(schema)})

    const handleForm = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/users", data)
            .then((response) => {
                toast.success("Conta criada com sucesso!");
                console.log("foi")
                return history.push("/login")
            })
            .catch((err) => {
                toast.error("Erro ao criar a conta! Verifique suas credenciais e tente novamente.")
                console.log(err)
            })
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
                        label="Name"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
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
                    <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="Confirmação de Senha"
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="Módulo do Curso"
                        {...register("course_module")}
                        error={!!errors.course_module}
                        helperText={errors.course_module?.message}
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="Bio"
                        {...register("bio")}
                        error={!!errors.bio}
                        helperText={errors.bio?.message}
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic"
                        variant="outlined"
                        label="Telefone de Contato"
                        {...register("contact")}
                        error={!!errors.contact}
                        helperText={errors.contact?.message}
                    />
                </div>
                <div>
                    <Button variant="contained" size="large" type="submit">Signup</Button>
                </div>
                <span>Já possui uma conta? <Link to="/login">Clique aqui. </Link> </span>
            </form>
            </Paper>
            </Content>
        </Container>
    )
}
