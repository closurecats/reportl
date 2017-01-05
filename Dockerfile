FROM node:boron

RUN mkdir -p /srv/reportl
WORKDIR /srv/reportl

COPY package.json /srv/reportl
RUN npm install

COPY . /srv/reportl

EXPOSE 8000

CMD [ "npm", "start" ]
