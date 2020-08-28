import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import {Wave} from "better-react-spinkit";
import Resource from "../ResourcesPage/Resource";
import Framework from "../FrameworkPage/Framework";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";

const ProgramInfo = ({match}) => {
    const [resources, setResources] = useState();
    const [frameworks, setFramework] = useState();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const [loading, setLoading] = useState(true);
    // ici on récupère l'id hydra du program qui contient les ressources
    //cette id est dans l'url et on la récupère grâce à une spécifité de react-router-dom qui est le {match}
    //ce {match} s'utilise en déclarant la route dans App.js de manière différente :
    //<PrivateRoute path={CONSTANTS.PROGRAM_SINGLE + "/:id+"} component={ProgramInfo} />
    //ici on utilise <PrivateRoute> mais cela peut être aussi juste <Route>
    //pour indiquer qu'il faut transmettre l'id dans l'url et la récupérer avec {match}, il faut indiquer "/:id+"
    //les ":" sont important et cela correspond en java à une url avec "/{id}" par exemple. Le "+" indique qu'il peut y avoir d'autres / derrière l'id dans l'url
    const idProgram = match.params.id;
    const {username} = useContext(UserContext);

    useEffect(() => {
        //ici une requête get sur les ressources du program https://localhost:8000/api/programs/{id}
        //c'est donc pour ça qu'on transmet l'id hydra du program depuis le composant Program.js et
        // toujours le header pour accéder au données via une authentication à chaque requête
        getProgramInfo(idProgram, config)
            .then((res) => {
                //on récupère la liste des ressources du program
                const resourcesList = res.data.topic.ressources;
                //mais aussi la liste des framework qui vont avec le program, ex: php-> Symfony et Laravel
                const frameworkList = res.data.frameworks;
                //on place ses données dans deux states différents
                setResources(resourcesList);
                setFramework(frameworkList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    //ces deux méthodes qui suivent simplifie la construction du render et affichent pour la première
    //les framework du program en passant par le composant Framework.js qui à la manière de Program.js
    // affiche les framework individuellement.
    //La seconde méthode fait la même chose mais pour les ressources.
    //Ainsi les deux sont affichés sur la même page
    const DisplayFramework = () => {
        return frameworks.map((framework) => {
            return (
                //A la manière de Program.js puis ProgramInfo.js, on passe l'id Hydra du framework afin
                // de requeter dessus plus tard
                <Framework key ={framework['@id']} framework={framework} />
            );
        })
    }

    const DisplayResource = () => {
        return resources.map((resource) => {
            return (
                <Resource  key={resource['@id']} resource={resource} />
            );
        })
    }

    return (
        <div style={{height:"200vh"}}>

            <ConnectedUserNav username={username} />
            
            <div className="card-deck" style={{marginTop:"20px"}}>

                {loading ? (
                    <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Wave size={100} color={"#00acee"} />
                    </div>
                ) : (
                    <>
                        {<DisplayFramework />}
                        {<DisplayResource />}
                    </>
                )}
            </div>
        </div>
    );
};
export default ProgramInfo;