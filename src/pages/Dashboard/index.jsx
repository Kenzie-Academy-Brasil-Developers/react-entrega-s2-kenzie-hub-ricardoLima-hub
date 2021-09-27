import { useForm } from "react-hook-form";
import { Container, TechsContainer } from "./styles";
import { Button, Paper, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cards from "../../components/cards";

export default function Dashboard({authenticated}) {

    const myStyle= {
        padding: "5px",
        borderRadius: "20px",
    }

    const [id] = useState(JSON.parse(localStorage.getItem("@KenzieHub:id")));
    const [techs, setTechs] = useState([]);
    const [token] = useState(
        JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
    );

    const { register, handleSubmit } = useForm();

    const loadTechs = () => {
        axios
            .get(`https://kenziehub.herokuapp.com/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then( response =>  {
                setTechs(response.data.techs)
            })
            .catch( err => console.log(err))
    }

    useEffect(() => {
        loadTechs();
    });

    const handleForm = (data) => {
        if (!data) {
            return toast.error("Complete o campo para enviar uma tech!")
        }
        axios
            .post("https://kenziehub.herokuapp.com/users/techs", {
                title: data.title,
                status: data.status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then(() => {
                loadTechs()
                console.log(data)
            })
                
            .catch(() => toast.error("Tecnologia existente!"))
    }

    const handleCompleted = (id) => {
        const newTechs = techs.filter((item) => item.id !== id);
        axios
            .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setTechs(newTechs))
    }

    return (
        <Container>
            <Paper style={myStyle}>
                <h3>Cadastre as suas techs!</h3>
                <form onSubmit={handleSubmit(handleForm)}>
                    <div>
                        <TextField 
                            label="Title"
                            variant="outlined"
                            fullWidth
                            {...register("title")}
                        />
                    </div>
                    <div>
                        <TextField 
                            label="Status"
                            variant="outlined"
                            fullWidth
                            {...register("status")}
                        />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" size="large">Cadastrar</Button>
                    </div>
                </form>
            </Paper>
            <TechsContainer>
                {techs.map((techs) => {
                    return (
                    <Cards
                        key={techs.id}
                        title={techs.title}
                        status={techs.status}
                        onClick={() => handleCompleted(techs.id)}
                    />
                )})}
            </TechsContainer>
        </Container>
    )
}


