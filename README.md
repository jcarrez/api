API NodeJS qui envoie des mails depuis un formulaire html

L'image DockerHub jcarrez/api:latest

Dans le dockerfile, il faut remplir les champs : 

HOST avec l'url du serveur mail

SMTP avec le port SMTP du serveur mail

USER avec l'identifiant de l'email d'envoie

PASS avec le mot de passe de l'email d'envoie

DEST avec l'email du destinataire

Dans le fichier index.html, dans le script, il faut remplir le champs URL avec l'URL de l'api.

L'API écoute sur /0/mail
Par exemple : http://127.0.0.1/0/mail

Il faut heberger le fichier index.html sur une machine virtuelle ou un contenaire apache/http
