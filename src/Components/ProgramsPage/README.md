### ProgramPage

Gère la page des programmes

#### Program.js

Affiche chaque program individuellement en récupérant les données de chaque program de la liste programs.

```php
    {/*on affiche le nom du program*/}
    <h5 className="card-title text-center">{program.programName}</h5>
    <div className="text-center">
    {/*
    on place un lien qui va pointer sur un composant qui affiche les ressources(tutoriels et framework
    du program. Pour ce faire la route vers ce composant implique une url qui contient l'id Hydra (donc unique d'un objet JSON-LD)
    du program en question et pointe vers le composant ProgramInfo
    */}
    <Link className="btn btn-primary" to={`${CONSTANTS.PROGRAM_SINGLE}${program["@id"]}`}>
        Go inside the program
    </Link>
    </div>
```

#### Programs.js

```php
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
```

#### ProgramInfo.js

```php
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
```
