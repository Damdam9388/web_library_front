## Les Composants 
---

Les composants React vous permettent de découper une interface utilisateur en blocs indépendants et réutilisables, ce qui vous permet de concevoir chaque partie en isolation. 
Un composant React peut être défini en étendant la classes React.Component.
Ils prennent des données brutes et les rendent au format HTML dans le DOM en utilisant `render`. Ils utilisent des propriétés (props) et des états qui contribuent à ces données brutes. Les props et les états sont des objets Javascript simples.

Les méthodes suivantes sont appelées dans cet ordre lorsqu’une instance d’un composant est créée puis insérée dans le DOM :

- constructor()
- render()
- componentDidMount()

#### constructor() 
`Le constructeur` d’un composant React est appelé avant que celui-ci soit monté. Quand on implémente le constructeur d’une sous-classe de React.Component, il faut commencer par appeler super(props), avant toute manipulation de this. Dans le cas contraire, outre une éventuelle erreur de syntaxe ES6, this.props sera undefined dans le constructeur, ce qui peut causer des bugs.

Les constructeurs React sont habituellement utilisés pour deux raisons seulement :

- Initialiser l’état local en affectant un objet à this.state.
- Lier des méthodes gestionnaires d’événements à l’instance.

#### render() 
La méthode `render()` est la seule méthode requise dans une classe de composant, lorsqu’elle est appelée, elle examine en général this.props et this.state.
La fonction render() doit être pure, c’est-à-dire qu’elle ne doit rien changer à l’état local du composant, doit renvoyer le même résultat chaque fois qu’elle est invoquée (dans des conditions identiques), et ne doit pas interagir directement avec le navigateur.

#### componentDidMount()
`componentDidMount()` est appelée immédiatement après que le composant est monté (inséré dans l’arbre). C’est ici que vous devriez placer les initialisations qui requièrent l’existence de nœuds du DOM. Si vous avez besoin de charger des données depuis un point d’accès distant, c’est aussi le bon endroit pour déclencher votre requête réseau.

---

### AddResource : 

On y trouve : `AddResource.js`, `AddResourceForm.js`.

##### AddResourceForm.js

Sert à créer notre formulaire d'ajout de ressource.

##### AddResource.js

- Mis en place axiosData pour récupérer les valeurs du formulaire
- Envoyer la requette à l’url de l’api symfony(ENDPOINT) avec les valeurs des champs, qui va les recevoir sous format json.
- On utilise ici un hook `useEffect` pour indiquer à React que notre composant doit exécuter uelque chose après chaque affichage.
Le fait d’appeler `useEffect` à l’intérieur de notre composant nous permet d’accéder à la variable d’état `data` (ou à n’importe quelle prop) directement depuis l’effet. Pas besoin d’une API dédiée pour les lire : elle est déjà dans la portée de la fonction.
Nous déclarons la variable d’état `data`, puis indiquons à React que nous avons besoin d’utiliser un effet. Nous passons alors une fonction au Hook useEffect.Lorsque React affichera notre composant, il se souviendra de notre effet, et l’exécutera après avoir mis à jour le DOM.  

--- 

### Contact : 

On y trouve : `Contact.js`, `ContactForm.js` et `ContactForm.scss`.

##### ContactForm.js

Sert à créer notre formulaire de contact.

##### Contact.js

- Mis en place axiosData pour récupérer les valeurs du formulaire
- Envoyer la requette à l’url de l’api symfony(ENDPOINT) avec les valeurs des champs, qui va les recevoir sous format json.
 

##### ContactForm.scss

Pour gérer le style du formulaire.

---

### Context 

Le contexte de React permet de partager des informations avec n'importe quel composant, en le stockant dans un endroit central et en permettant l'accès à n'importe quel composant qui le demande (En général, on transmet les données que du parent à l'enfant via des props).

---

### LandingPage  
---

### Login  
---

### Pages  

##### ConnectedUserPage.js
C'est la page qu'on trouve une fois l'utilisateur connecté.

##### ConnectedUserPage.scss
Style

##### ContactConfirmation.js
C'est une sorte de redirection vers cette page qui affiche un message de confirmation lorsque le message a été bien envoyé.

#### PrivateRoute.js

PrivateRoute sert à vérifier si l'utilisateur est bien connecté qd il veut accéder aux programmes, si il est pas connecté il est rediriger vers la page de login pour se connecter.

```php
function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
            }
        />
    );
}
```

---

### ProgramsPage 

---

### ResourcesPage  

---

### SelectResource  :

On y trouve `SelectAuthor.js`, `SelectLevel.js` et `SelectTopic.js`. Ils ont tous à peu près le même principe, donc je vais me contenter de présenter un seul (SelectAuthor.js)

Ce fichier permet de récupérer les différents choix d'auteurs qu'on peut trouver dans la base, en utilisant une méthode GET avec axios vers l'URL de l'api en question (ENDPOINT_SELECT_AUTHOR).

Ne pas oublier de récupérer le bearer token pour indiquer que l'utilisateur qui accède à la ressoure est bien authentifié.

```php
const SelectAuthor = () => {
    //Déclarer une variable d'état "authors"
    const [authors, setAuthors] = useState([]);
    //Bearer Token" est un JSON Web Token dont le rôle est d'indiquer 
    //que l'utilisateur qui accède aux ressources est bien authentifié.
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    useEffect(() => {
        console.log("Hi, AUTHOR");
        //we send a GET request using axios
            axios.get(CONSTANTS.ENDPOINT_SELECT_AUTHOR, config)
                .then(response => {
                    const selectAuthor = response.data['hydra:member'];
                    setAuthors(selectAuthor);
                }, (error) => {
                    console.log(error);
                });
    }, []);
```
Ici, on va mapper sur notre tableau `authors` pour afficher `author.name` qui correspond à un certain `author.id`.

```php
    return (
        <div> 
            <Select placeholder="Author..." variant="outline" type="text" name="author" id="author" className="form-control">
                    {authors.map(author => (
                        <option key={author.id}>{author.name}</option>))
                    })
            </Select>
        </div>
    );
```

---

### SignUp  

---

### Team : 

Une page toute simple en HTML pour présenter les membres d'équipe

---

### Utils

Dans le framework React, l'objet"history" permet d'interagir avec l'historique du navigateur. Le framework fonctionnant intégralement en JavaScript, il n'y a pas de changement de page comme avec un site en HTML classique. C'est grâce à cet objet que l'on peut envoyer une URL dans l'historique du navigateur pour revenir en arrière. 

```php
import { createBrowserHistory } from 'history';
//Route redirection
export default createBrowserHistory();
```