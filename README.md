# Getting MEAN with Mongo, Express, Angular, and Node Second Edition by Simon Holmes & CLive Harber

Repositori ini berisi latihan dari ebook Getting MEAN with Mongo, Express, Angular, and Node Second Edition by Simon Holmes & CLive Harber.
https://www.amazon.com/Getting-MEAN-Mongo-Express-Angular/dp/1617294756

## Notes
Ada beberapa source code yang berbeda dengan source code yang ada di buku, karena ada beberapa library berbeda yang digunakan baik versi maupun keseluruhan. Misalnya di source code ini saya tidak menggunakan Google Maps API tetapi menggunakan leaflet.js.

## PATH
API: ./app_api <br>
SPA (MEAN): ./app_public/ <br>
Integrated Application (Node.js & MongoDB): ./app_server <br>
API Testing: ./Getting MEAN Stack.postman_collection.json

## Library/ Dependencies
```javascript
"cookie-parser": "~1.4.4",
"debug": "~2.6.9",
"dotenv": "^8.2.0",
"express": "~4.16.1",
"express-jwt": "^6.0.0",
"http-errors": "~1.6.3",
"jsonwebtoken": "^8.5.1",
"mongoose": "^5.9.22",
"morgan": "~1.9.1",
"passport": "^0.4.1",
"passport-local": "^1.0.0",
"pug": "2.0.0-beta11",
"request": "^2.88.2"
```

## Basic Command:

**Running Local Environtment Connect to Mongodb local**
```bash
# location: ./
nodemon
```
**Running Local Environtment Connect to Mongodb Atlas**
```bash
# location: ./
NODE_ENV=production nodemon
```

**Running MEAN (Angular)**
```bash
# location: ./app_public
ng serve
```

## Contact
https://www.cefsyarif.com <br/>
chefdeveloper29@gmail.com <br/>
twitter: [@IdSundev](https://twitter.com/IdSundev) <br/>
[Direct Message](https://wa.me/+6287730217935)
