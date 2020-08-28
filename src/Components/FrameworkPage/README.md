### Framework Page

Il gère la page des framework.

#### Framework.js

Affiche les framework individuellement en recupérant le state frameworks de FrameworkInfo.js.

#### FramworkInfo.js

Affiche les ressources du framework.

```php

const FrameworkInfo = ({match}) => {
    const [ressources, setRessources] = useState();
    const {username} = useContext(UserContext);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const [loading, setLoading] = useState(true);
    // ici on récupère l'id hydra du framework qui contient les ressources
    //cette id est dans l'url et on la récupère grâce à une spécifité de react-router-dom qui est le {match}
    //ce {match} s'utilise en déclarant la route dans App.js de manière différente :
    //<PrivateRoute path={CONSTANTS.FRAMEWORK_SINGLE + "/:id+"} component={FrameworkInfo} />
    //ici on utilise <PrivateRoute> mais cela peut être aussi juste <Route>
    //pour indiquer qu'il faut transmettre l'id dans l'url et la récupérer avec {match}, il faut indiquer "/:id+"
    //les ":" sont important et cela correspond en java à une url avec "/{id}" par exemple. Le "+" indique qu'il peut y avoir d'autres / derrière l'id dans l'url
    const idFramework = match.params.id;

    useEffect(() => {
        //ici une requête get sur les ressources du program https://localhost:8000/api/programs/{id}
        //c'est donc pour ça qu'on transmet l'id hydra du program depuis le composant Program.js et
        // toujours le header pour accéder au données via une authentication à chaque requête
        getProgramInfo(idFramework, config)
            .then((res) => {
                //on récupère les ressources du framework mais en passant dans l'url vers le back
                //l'id hydra du framework cette fois puisque getProgramInfo retourne surtout l'url de base
                //soit https://localhost/8000: couplé à un id qui permet de trouver un objet dans le back-end grâce à
                //son id unique hydra.
                const resourcesList = res.data.topic.ressources;
                setRessources(resourcesList);
                console.log(resourcesList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div style={{height:"100vh"}}>
            <ConnectedUserNav username={username} />
            <div className="card-deck mt-5">
                {loading ? (
                    <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Wave size={100} color={"#00acee"} />
                    </div>
                ) : (
                    ressources.map((resource) => {
                        return (
                            <>
                                {/*
                                on affiche les ressources du framework individuellement
                                */}
                                <Resource key={resource['@id']} resource={resource} />
                            </>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default FrameworkInfo;
```




