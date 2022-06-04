FROM node:16

WORKDIR "/api"

ADD package.json "/api/package.json"
ADD main.js "/api/main.js"

#Port d'écoute
ENV PORT=80
EXPOSE 80

#Hôte mail
ENV HOST=""

#Port SMTP
ENV SMTP=""

#Utilisateur Mail
ENV USER=""

#Mot de passe Mail
ENV PASS=""

#Destinataire
ENV DEST=""

RUN npm install
RUN npm install nodemailer body-parser cors express sendmail smtpapi dotenv

ENTRYPOINT npm run system
