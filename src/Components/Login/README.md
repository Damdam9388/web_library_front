### Login 

Gère toute les fonctionnalité du **formulaire login**.

#### LoginForm.js

Notre formulaire de Login.

#### Login.js

```php
const Login = (props) => {
    //on implémente les trois contexts
    const {updateLogged} = useContext(AuthContext);
    const {updateUsername} = useContext(UserContext);
    const {updateRole} = useContext(RoleContext);
    //on implémente un state loading pour mettre en place le loader
    // tant que les données de la requête ne son pas chargées, loading = true
    // Une fois les données chargées, loading = false
    const [loading, setLoading] = useState(false);

    //variable pour implémenter la redirection via react-router-dom
    let history = useHistory();

    //méthode qui s'occupe de la requête de login a envoyer au back-end
    const axiosLogin = (e) => {
        //on initialise loading à true
        setLoading(true);
        //on recupere les données contenues dans le formulaire de login react à l'aide de 'e.target.elements.[name de l'input].value'
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        //on stoppe la propagation de l'event afin qu'il se borne à l'action qu'on lui demande
        e.preventDefault();
        //on fait appel à la méthode getLogin qui fait une requête POST avec Axios sur la route : https://localhost:8000/login_check
        //si la requête renvoie une authentication successfully alors on doit recevoir un JWT token et le login et le role de l'utilisateur connecté
        getLogin(email, password)
            //si la requête réussie, on fait les actions ci-dessous
            .then((response) => {
                console.log(response);
                //on récupère le JWT token et on le place dans le localStorage sous la variable tokenUser
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("tokenUser", token);
                //on récupère le login et on le place dans le localStorage sous la variable userLogin
                const userLogin = response.data.data.login;
                localStorage.setItem("userLogin", userLogin);
                //on récupère le role et on le place dans le localStorage sous la variable userRole
                localStorage.setItem("userRole", response.data.data.roles[0]);
                //on initialise les valeurs des contexts avec les données reçues
                //le roleContext prend la valeur du role contenu dans la response
                updateRole(response.data.data.roles[0]);
                //le UserContext prend la valeur du login contenu dans la response
                updateUsername(userLogin);
                //le authContext prend la valeur true
                updateLogged(true);
                //selon le role(ADMIN ou USER) on redirige vers la bonne page d'accueil
                history.push(response.data.data.roles[0] === 'ROLE_ADMIN' ? CONSTANTS.ADMIN_DASHBOARD : CONSTANTS.CONNECTED_USER);
            })
            //si l'authentication echoue, le serveur back-end renvoit une erreur et on enlève les données contenues dans le localStorage
            .catch((error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
                localStorage.removeItem("userLogin");
                localStorage.removeItem("userRole");
            })
            //finalement, tout est chargé donc on remet loading à false
            .finally(() => setLoading(false));
    };

```

#### ForgotPassword.js

Composant du formulaire de mot de passe oublié pour demander une reinitialisation du mot de passe au back-end.

```php
const ForgotPassword = () => {

    const [title] = useState("submit");

    //la requete part depuis cette méthode
    const sendEmail = (e) => {
        const email = e.target.elements.email.value;
        e.preventDefault();
        //service qui détient le détail de la requête
        //envoie l'adresse email, recuperée dans le formulaire react, au back-end, plus précisement au ForgotPasswordController et
        // à la méthode forgotPassword() (sur la route : localhost:8000/mail-reset-password) qui va retrouver le user avec le mail puis envoyer un mail si le
        //user existe bien en BDD
        userForgotPassword(email)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

```

#### ChangeForgotPassword.js

Ce composant est accessible seulement depuis le lien envoyé en mail au user qui demande une reinitialisation de mot de passe.
Il fait suite au composant ForgotPassword.

```php
const ChangeForgotPassword = ({match}) => {
    const [show, setShow] = useState(false);
    const [title] = useState("submit");
    const handleClick = () => setShow(!show);

    //action de la requête pour créer un nouveau mot de passe
    //qui va etre envoyé au back-end via une requête PUT (cad UPDATE)
    const changePassword = (e) => {
        //Le lien dans le mail contient un token transmis par le back-end
        //il faut récupérer ce token afin de le renvoyer au back-end dans la requête
        //ce token servira à authentifier l'utilisateur
        const token = match.params.token;
        //le nouveau mot de passe créé
        const password = e.target.elements.password.value;
        e.preventDefault();
        //on envoie la requête PUT
        userChangeForgotPassword(token, password)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
```

Dans le but de factoriser on a créer 3 composants de plus : 

`ButtonForgotPassword.js`

```php
const ButtonForgotPassword = () => (
  <div className="row mb-5">
    <div className="col-md-12 d-flex flex-column justify-content-end align-items-md-end">
      <Button
        color="dark"
        bg="#4a9bd1"
        borderColor="#4a9bd1"
        size="sm"
        _hover={{ bg: "#78a6c5", borderColor: "#78a6c5" }}
      >
        <Link className="text-white" to={CONSTANTS.FORGOT_PASSWORD}>
          Forgot your password
        </Link>
      </Button>
    </div>
  </div>
);
```

`EmailField.js` 

```php
const EmailField = () => (
  <InputFormControl
    id="email"
    name="email"
    label="Email"
    placeholder="Enter Email..."
    type="email"
    mb="1rem"
    borderTop="none"
    borderLeft="none"
    borderRight="none"
    borderRadius="none"
    borderBottomColor="black"
    bg="transparent"
    aria-describedby="emailHelp"
    _focus={{
      outline: "none",
      bg: "transparent",
      color: "black",
      boxShadow: "none",
    }}
    color="black"
    p="0"
  />
);
```
 
`PasswordField.js`

```php
const PasswordField = ({ show, handleRightBtnClick }) => (
  <InputFormControl
    name="password"
    id="password"
    label="Password"
    placeholder="Enter Password..."
    type={show ? "text" : "password"}
    rightElement={
      <ButtonShowHide show={show} handleClick={handleRightBtnClick} />
    }
    borderTop="none"
    borderLeft="none"
    borderRight="none"
    borderRadius="none"
    bg="transparent"
    borderBottomColor="black"
    aria-describedby="emailHelp"
    p="0"
    color="black"
    _focus={{
      outline: "none",
      bg: "transparent",
      color: "black",
      boxShadow: "none",
    }}
  />
);
```

Comme ça on fera appel uniquement au composant en rajoutant nos mettant les valeurs volus, sans à avoir à répéter le même champ à chaque fois.