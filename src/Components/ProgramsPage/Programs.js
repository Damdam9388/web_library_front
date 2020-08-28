import React, {useState, useEffect, useContext} from "react";
import {getPrograms} from "../../Services/ProgramsServices";
import Program from "./Program";
import {Wave} from "better-react-spinkit";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";

const Programs = () => {
    const [programs, setPrograms] = useState();
    const [loading, setLoading] = useState(true);
    //on récupère le JWT token dans le localStorage
    const token = localStorage.getItem('tokenUser');
    //on crée une variable config qui va servir de header afin d'accéder au route du back qui demandent une vérification du JWT
    const config = {headers: {Authorization: "Bearer " + token}};
    const {username} = useContext(UserContext);

    //on utilise un useeffect pour lancer la requete dès le chargement de la page
    useEffect(() => {
        //on effectue une requête sur https://localhost:8000/api/programs afin de récupérer tous les languages de
        //programmation
        getPrograms(config)
            //si la requete réussie
            .then((res) => {
                //on récupère les données sous la forme d'une collection d'objet JSON. ["hydra:member"] sert à dire qu'on
                //veut dans programsList tous les objets JSON qui sont en fait les objets PHP program transformés en objet JSON-LD
                const programsList = res.data["hydra:member"];
                //on place cette liste d'objets program dans le state programs grâce à la méthode setPrograms définie avec le useState
                setPrograms(programsList);
                console.log(programsList);
            })
            .catch((err) => console.error(err))
            //une fois toutes les actions faites, on repasse isLoading à false
            .finally(() => setLoading(false));
    }, []);

    return (
        <div style={{height:"100vh"}}>

            <ConnectedUserNav username={username} />
            <div className="card-deck">
                    {loading ? (
                        //si les actions du useEffect ne sont pas terminées, on montre un loader en milieu de page
                            <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                                <Wave size={100} color={"#00acee"} />
                            </div>

                    ) : (
                        //si les donnés sont chargées et placées dans le state programs
                        //alors on execute un .map() pour lire tous les objets de la liste un par un
                        programs.map((program, index) => {
                            return (
                                    //on place chaque objet de la liste dans le composant Program qui sert à afficher chaque program
                                    //de manière individuelle
                                    <Program key={index} program={program} />

                            );
                        })
                    )}
            </div>
        </div>
    );
};

export default Programs;