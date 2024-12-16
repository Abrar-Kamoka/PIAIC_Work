FROM node:latest

WORKDIR /App

COPY ./server.js .
COPY ./package.json .

RUN npm install 

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]








# FROM ubuntu:latest

# # RUN mkdir Projects
# # RUN cd  Projects
# # WORKDIR /Projects/src/app     #this will make multiple folders & cd to it

# WORKDIR /Projects

# COPY . .

# RUN sudo apt update
# RUN sudo apt install nodejs
# RUN ls -a
# EXPOSE 8000

# # RUN npm start   #is not allowed here, use entrypoint either

# ENTRYPOINT ["node", "server.js"]