***Modification de la partie Administration pour les DeleteItem.js et update. Modifications de l'affichage des programs et des frameworks et leurs ressources***

**programContainer.js** ->
changement du endpoint (il appelait "api/programs" avant et maintenant il appelle "api/topic_programming_language")
ajout d'un endpointDelete comme props dans le composant Item.js

**UpdateProgramForm.js** -> modification des data passé dans la méthode put. Par programmingLanguage on accède au program et donc name correspond au nom du program

**ResourcesContainer.js** -> comme ProgramsContainer.js

**UsersContainer.js** -> comme ProgramsContainer.js

**DeleteItem.js** -> avec la création de l'instance d'axios (voir AxiosInstance) on obtient l'url de base directement localhost:8000. On a juste a ajouter l'id de l'item ${item['@id']}(correspond à un user ou à un program ou à un resource).

**DisplayItemInTable.js** -> endpointDelete créé mais ne sert à rien

**ProgramInfo.js** -> comme on récupère les topic_programming_language et qu'on a mis en place un DTO ProgramingLanguageOutput.php, on peut facilement récupérer la liste des ressources et des frameworks

**ProgramsServices.js** -> on modifie les url vers le back pour pointer sur "api/topic_programming_language" pour récupérer un objet.php TopicProgrammingLanguage.php
un exemple d'un Topic_programming_language object en objet JSON

```javascript
{
            "@id": "/api/topic_programming_languages/4",
            "idTopicProgramming": 4,
            "id": 1,
            "programName": "PHP",
            "frameworks": [
                {
                    "@id": "/api/framework/1",
                    "frameworkName": "Symfony",
                    "docUrl": "https://symfony.com/doc/current/index.html"
                }
            ],
            "ressources": [
                {
                    "@id": "/api/ressources/1",
                    "id": 1,
                    "resourceName": "Découvrez les tableaux en PHP",
                    "url": "https://symfony.com/doc/current/index.html",
                    "author": "Fabien Potencier",
                    "level": "Débutant",
                    "language": "French",
                    "publisher": "jean.robert"
                }
            ]
        }
```