# select image base for new docker image
FROM node:12.13.1

# create directory for client-side code
RUN mkdir -p /app/client

# assign working directory
WORKDIR /app/client

# import package.json dependency lists
COPY package.json /app/client
COPY package-lock.json /app/client
RUN cat /app/client/package.json

# copy client-side code into directory
COPY . /app/client

# Run apt-get update within docker image to update package list.
RUN apt-get update -y

# Install node dependencies
RUN npm install
RUN npm run build
RUN npm install -g serve

# Install pip3, pip3 will install the requirements.txt for the app
# RUN apt-get install -y python3-pip python3-dev
# RUN cd sources/python && pip3 install -r requirements.txt


CMD "serve -s -l 3000 build"
