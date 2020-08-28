### AddResource

On y trouve des composants de formulaire et de méthodes pour l'ajout de ressource.


#### AddResourceFormFramework.js et AddResourceFormProgram.js

Servent à créer notre formulaire d'ajout de ressource.

Ici on a définit un state sur le champs Author, on a deux possibilité, soit on selecte un author qui existe déjâ, soit on crée un nouvel author, dans ce cas là, il fallait mettre un boutton qui permet de gérer ça en utilisant une variable d'état `showInput` qui va afficher un input au lieu du select, dans le cas où c'est **true** et un select dans le cas où c'est **false**.

```php
    const [showInput, setShowInput] = useState(false);

    const changeInput = () => {
        setShowInput(true);
    }

    const changeInputToFalse = () => {
        setShowInput(false);
    }
```
```php

    {
        showInput ?
            <FormControl isRequired>
            <FormLabel htmlFor="author">Author</FormLabel>
            <InputGroup>
            <InputLeftElement/>
            <Input
                variant="outline"
                type="text"
                name="author"
                id="author"
                className="form-control"
                placeholder="author..."
            />
            </InputGroup>
                <button onClick={changeInputToFalse}>Select an existing author</button>
            </FormControl>
        :
            <FormControl isRequired id="parap">
                <FormLabel htmlFor="name">Author</FormLabel>
                    <SelectAuthor/>
                    <button onClick={changeInput}>Add a new author</button>
            </FormControl>
    }
```

Si le showInput est à true, on va utiliser la propriété getAddedResourceInput qu'on définit dans `AddResourceFramework.js` et `AddResourceProgram.js` (vous allez voir ça juste après), sinon on soumet notre formulaire avec getAddedResource.

```php
    {/* On utilise l operateur ternaire : si showInput est vrai alors on soumet avec getAddedResourceInput*/}
    {/* sinon on utilise getAddedResource */}
    <form onSubmit={showInput ? getAddedResourceInput : getAddedResource}>
```


#### AddResourceFramework.js  

```php
const AddResourceFramework = (props) => {
    //L'objet history permet d'interagir avec l'historique du navigateur.
    //C'est grâce à cet objet que l'on peut envoyer une URL dans l'historique du 
    //navigateur pour revenir en arrière. 
    //On peut utiliser "history" depuis n'importe quel fichier du projet.
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    //Bearer Token" est un JSON Web Token dont le rôle est d'indiquer 
    //que l'utilisateur qui accède aux ressources est bien authentifié.
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization:"Bearer " + token, 'Content-type': 'application/json'}};

    //Récupération des valeurs du formulaire avec méthode axiosAddResourceInput(lié avec getAddedResourceInput)
    // donc méthode utilisée si on crée un auteur en meme temps qu'on crée la ressource
    const axiosAddResourceInput = (e) => {
    setIsLoading(true);
    setData({
        name : e.target.elements.name.value,
        url : e.target.elements.url.value,
        //ici on crée un nouvel auteur, il faut donc créé un nouvel objet JSON, qui a le champs name
        //c'est pourquoi name:e.target.elements.author.value est entre accolade
        author : {name:e.target.elements.author.value},
        language : e.target.elements.language.value,
        level : e.target.elements.level.value,
        topic : e.target.elements.framework.value
    });
    // PreventDefault indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, 
    // son action par défaut ne doit pas être prise en compte comme elle le serait normalement. 
    // L'événement continue à se propager comme d'habitude, 
    e.preventDefault();

    };

    //Récupération des valeurs du formulaire avec méthode axiosAddResource(lié avec getAddedResource)
    // méthode utilisée si on séléctionne un auteur existant lors de la création de la ressource
    const axiosAddResource = (e) => {
        setIsLoading(true);
        setData({
            name : e.target.elements.name.value,
            url : e.target.elements.url.value,
            author : e.target.elements.author.value,
            language : e.target.elements.language.value,
            level : e.target.elements.level.value,
            topic : e.target.elements.framework.value
        });
        // PreventDefault indique à l'agent utilisateur que si l'événement n'est pas traité explicitement,
        // son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
        // L'événement continue à se propager comme d'habitude,
        e.preventDefault();

    };
    //Envoyer la requête à Symfony using React Hook `useEffect`
    useEffect(() => {
        loadResources(data, config, history, setIsLoading)
    //Whenever the data inside of our array [data] changes, we gonna re-run this hook, 
    //otherwise we'll not re-run it
    }, [data]);


    return (
    <>
        <AddResourceFormFramework getAddedResource={axiosAddResource} isLoading={isLoading} getAddedResourceInput={axiosAddResourceInput}/>
    </>
    );
};
export default AddResourceFramework;
```

#### AddResourceProgram.js  

```php
const AddResourceProgram = (props) => {
    //L'objet history permet d'interagir avec l'historique du navigateur.
    //C'est grâce à cet objet que l'on peut envoyer une URL dans l'historique du 
    //navigateur pour revenir en arrière. 
    //On peut utiliser "history" depuis n'importe quel fichier du projet.
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    //Bearer Token" est un JSON Web Token dont le rôle est d'indiquer 
    //que l'utilisateur qui accède aux ressources est bien authentifié.
    //'Content-type': 'application/json' pour dire que ce qui est contenu dans le body ce qui est envoyer dans la requête c du json
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization:"Bearer " + token, 'Content-type': 'application/json'}};


    //Récupération des valeurs du formulaire avec méthode axiosAddResourceInput(lié avec getAddedResourceInput)
    // donc méthode utilisée si on crée un auteur en meme temps qu'on crée la ressource
    const axiosAddResourceInput = (e) => {
        setIsLoading(true);
        setData({
            name : e.target.elements.name.value,
            url : e.target.elements.url.value,
            //ici on crée un nouvel auteur, il faut donc créé un nouvel objet JSON, avec le champs name.
            //c'est pourquoi name:e.target.elements.author.value est entre accolade
            author : {name:e.target.elements.author.value},
            language : e.target.elements.language.value,
            level : e.target.elements.level.value,
            topic : e.target.elements.program.value
        });
        // PreventDefault indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, 
        // son action par défaut ne doit pas être prise en compte comme elle le serait normalement. 
        // L'événement continue à se propager comme d'habitude, 
        e.preventDefault();
    
        };
    
        //Récupération des valeurs du formulaire avec méthode axiosAddResource(lié avec getAddedResource)
        // méthode utilisée si on selectionne un auteur existant lors de la création de la ressource
        const axiosAddResource = (e) => {
            setIsLoading(true);
            setData({
                name : e.target.elements.name.value,
                url : e.target.elements.url.value,
                author : e.target.elements.author.value,
                language : e.target.elements.language.value,
                level : e.target.elements.level.value,
                topic : e.target.elements.program.value
            });
            // PreventDefault indique à l'agent utilisateur que si l'événement n'est pas traité explicitement,
            // son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
            // L'événement continue à se propager comme d'habitude,
            e.preventDefault();
            
        };

    //Envoyer la requête à Symfony using React Hook `useEffect`
    useEffect(() => {
        loadResources(data, config, history, setIsLoading)
    //Whenever the data inside of our array [data] changes, we gonna re-run this hook, 
    //otherwise we'll not re-run it
    }, [data, config, history]);


    return (
    <>
        <AddResourceFormProgram getAddedResource={axiosAddResource} isLoading={isLoading} getAddedResourceInput={axiosAddResourceInput}/>
    </>
    );
};
export default AddResourceProgram;
```