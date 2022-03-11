FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app 
RUN adduser --system app
COPY web-api/ .
RUN npm install
RUN chown -R app /opt/app
USER app
EXPOSE 9000
CMD [ "npm", "start" ]