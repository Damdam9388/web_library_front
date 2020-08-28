### SignUp

Gère notre fonctionnalité pour la création de compte d'un nouvel utilisateur

#### SignUp.js

```php
const SignUp = (props) => {
  //on implémente un state loading pour mettre en place le loader
  // tant que les données de la requête ne son pas chargées, loading = true
  // Une fois les données chargées, loading = false
  const [isLoading, setIsLoading] = useState(false);
  //variable pour implémenter la redirection via react-router-dom
  let history = useHistory();

  //méthode qui s'occupe de la requête de register a envoyer au back-end
  const axiosSignUp = (e) => {
    //on initialise loading à true
    setIsLoading(true);
    //on recupere les données contenues dans le formulaire de login react
    const userName = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log("username = " + userName + "mail = " + email + " password = " + password);
    //on stoppe la propagation de l'event afin qu'il se borne à l'action
    e.preventDefault();
    //on fait appel à la méthode getSignUp qui fait une requête POST avec Axios sur la route : https://localhost:8000/register
    //la requête va a la méthode register du registerController qui s'occupe de créer un nouvel utilisateur
    //et de l'enregistrer en BDD
    getSignUp(userName, email, password)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
        //finalement, tout est chargé donc on remet loading à false
      .finally(() => setIsLoading(false));
  };
```

#### ConfirmAccount.js

Composant pour activer le compte utilisateur suite à son inscription


```php
const ConfirmAccount = ({match}) => {
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        //le user doit recevoir un mail de la part du back
        //ce mail contient un lien qui envoit vers cette et contient un token qui va etre renvoyé au back-end
        //afin d'authentifier le user donc sécurité
        const token = match.params.token;
        //méthode PUT qui envoie sur la route /confirm-user/{token} du back-end et donc à la méthode confirmUser du AccountActivatorController
        getConfirmAccount(token)
            .then((res) => {
                console.log(res);
                //on renvoie le user à la page de login afin qu'il s'authentifie une fois le compte activé
                history.push(CONSTANTS.LOGIN);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [history, match.params.token]);
```