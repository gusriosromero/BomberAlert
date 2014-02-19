
 nodejs-MySQL-push-notifications-demo + Google maps marker push
================================================================
 Version:     0.1.0<br>
 Author:      Gustavo Rios<br>
 Contact:     griosrom@gmail.com<br>
 Twitter:     @zapinero<br>


## Bomber Alert

### 1) Clonar e instalar dependencias

Clonar
```sh
git clone https://github.com/zapinero/BomberAlert
npm install //Para instalar los modulos necesarios
```

### 2) Base de datos MySQL
El archivo BD_nodejs.sql contiene el script para la creacion de la base datos y la insercion de algunos datos de prueba

Abrir la consola de MySQL y ejecutar el contenido del archivo BD_nodejs.sql 

### 3) Visualizar y agregar marcadores
```sh
node server.js
```
Para visualizar el mapa con los marcadores abrir en el navegador localhost:8000

Para agregar marcadores abrir en el navegador localhost/bomberalert/incidente.html

La pagina incidente.html esta optimizado para moviles utilizando jquery mobile y utiliza la propiedad Geolocation de html5 para obtener la ubicacion.


nodejs-MySQL-push-notifications-demo
====================================

Node server that is able to read from a MySql database and then stream those data via websocket to many client connected on the same page. 
You can read the tutorial on my blog http://www.gianlucaguarini.com/blog/nodejs-and-a-simple-push-notification-server/


 
 Version:     0.1.2<br>
 Author:      Gianluca Guarini<br>
 Contact:     gianluca.guarini@gmail.com<br>
 Website:     http://www.gianlucaguarini.com/<br>
 Twitter:     @gianlucaguarini<br>
 
 Copyright (c) 2013 Gianluca Guarini
 
 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:
 
 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 

