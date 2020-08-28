### Services : 

Une couche de service qui sert en gros à factoriser le code des composants, en factorisant les `requêtes axios`.

#### AddResourceServices.js
On y trouve : 

```php
export const addResource = (data, config) => {
    return axios.post(ENDPOINT_ADD_RESOURCE, data, config)
};
```
cela permet d'ajouter la nouvelle ressource saisie par l'utilisateur en utilisant la méthode `post` vers le endpoint ***ENPOINT_ADD_RESOURCE** définit dans `UrlConstans.js`

Egalement : 

```php
export const loadResources = (data, config, history, setIsLoading) => {
    return addResource(data, config)
        .then((res) => {
            console.log(res);
            history.push(CONSTANTS.PROGRAMS);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setIsLoading(false));
};
```
ce qui est une méthode répéter plusieurs fois et du coup on a décider de définir un service pour cette dérnière afin de faire appel uniquement à la méthode `loadResources` dans nos composants `AddResourceProgram.js` et `AddResourceFramework.js`.

**==> Le même concept pour** `AuthenticationServices.js`, `ContactServices.js` et `ProgramsServices.js`