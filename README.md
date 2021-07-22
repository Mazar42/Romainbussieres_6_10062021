# Projet 6 OC So Pekocko
  - [Front-end](#front-end)
    - [Piquante](#piquante)
    - [Serveur de développement](#serveur-de-développement)
  - [Back-end](#back-end)
    - [Node et dépendances](#node-et-dépendances)
    - [Infos API](#infos-api)
--------------------------------------------------------------------------------------------------------------------
## Front-end 

### Piquante

Vous aurez besoin de cloner le repo du front-end (https://github.com/OpenClassrooms-Student-Center/dwj-projet6)

Ensuite, suivez les instructions fournies.

### Serveur de développement

Lancer `ng serve` pour démarrer le serveur de développement accessible à `http://localhost:4200/`.

--------------------------------------------------------------------------------------------------------------------
## Back-end

run "nodemon" pour lancer le serveur du back-end. Toutes les dépendances de node nécessaires doivent être installées pour que le projet fonctionne.


### Node et dépendances 


| NPM dépendances                   | Utilité                                                                                                       |
|:---------------------------------:|:-------------------------------------------------------------------------------------------------------------:|
| nodemon                           |Met à jour le serveur après chaque modification                                                                |
| express                           |Framework node utilisé pour l'application.                                                                     |
| mongoose                          |Assure la connexion à la base de donnée (MongoDB)                                                              |
| mongoose-unique-validator         |Empêche la même adresse de s'inscrire deux fois dans la DB                                                     |
| bcrypt                            |Chiffre les mots de passe dans la DB                                                                           |
| password-validator                |Limite les mots de passe à un schéma type                                                                      |
| jsonwebtoken                      |Permet de créer un token d'identification pour sécuriser les routes de l'api                                   |
| path                              |Module permettant de travailler sur les chemins de fichier et répertoires                                      |
| multer                            |Permet d'autoriser les fichiers entrants dans la DB                                                            |
| dotenv                            |Charge les variables environnement contenues dans le fichier .env                                              |
| email-validator                   |Vérifie que l'adresse email entrée est valide                                                                  |
| cors                              |Permet d'éviter les erreurs de cors                                                                            |
| helmet                            |Protège l'application contre des attaques connues (cross-site scripting, sniffing, protection xss,...)         |
| fs                                |(File System) Permet de gèrer les téléchargement et modification d'images                                      |

### Infos API


 [Fiche d'informations de l'API](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Guidelines+API.pdf "Redirection sur le lien fournit par Openclassrooms")
