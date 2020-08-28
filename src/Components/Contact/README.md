### Contact : 

On y trouve : `Contact.js`, `ContactForm.js` et `ContactForm.scss`.

##### ContactForm.js

Sert à créer notre formulaire de contact.

##### Contact.js

- Mis en place axiosData pour récupérer les valeurs du formulaire
- Envoyer la requette à l’url de l’api symfony(ENDPOINT) avec les valeurs des champs, qui va les recevoir sous format json.

```php
    //Récupération des valeurs du formulaire
    const axiosData = (e) => {
        setLoading(true);
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;
        e.preventDefault();
        //Envoyer la requette à symfony
        sendContactMessageInfo(name, email, subject, message)
            .then(response => {
                console.log(response);
                history.push(CONSTANTS.CONTACT_CONFIRMATION);
            })
            .catch(erreur => {
                console.log(erreur);
            })
            .finally(() => setLoading(false));;
    };
```

##### ContactForm.scss

Pour gérer le style du formulaire.

##### InputContact.js

C'est une factorisation du code pour éviter de répéter la même chose dans notre formulaire et faisant appel tout simplement à la balise `<InputContact nameId={"name"} label={"Name"}/>` avec le nameId et le label en question.


```php
const InputContact = ({nameId}, {label}) => {
    return <>
        <input name={nameId} id={nameId} placeholder={nameId} type="text" required/>
        <label>{label}</label>
    </>;
}
```