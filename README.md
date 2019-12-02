# ApiAguila

api res generada para consulta, edicion y adicion de viajes.

Manual instalacion

Descargue and transfeiera archivos del proyecto

1) Clone el repositorio, instale los paquetes Node, en la ruta clonada local

git clone https://github.com/jagem88/ApiAguila.git
npm install

2) la base de datos se encuentra creada en mongoDB, para lo cual debera instalarlo previamente en el equipo, y para poder replicar la base de datos se recomienda crear una nueva con el nombre de Aguila y a su vez ejecutar el comando de importacion de mongo para cargar los documentos del archivo trip.js contenido en la carpeta raiz de este proyecto, el comando de importacion es:

mongoimport --jsonArray --db=Aguila --collection=trips --drop --type=json --file=f:/trips.json

nota: en la parte de --file=f:/trips.json, reemplazar por la ruta local donde sea clonado el repositorio Git

3) Abirr el archivo con nombre config.js, y revisar el puerto de conexion de MongoDB ya que por defecto se dejo 27017

4)despues de realizar los pasos anteriores se debe iniciar el servidor de Node.js para lo cual el Comando para abrir servidor es:

node server.js

abrir en cualquier navegador alguna de las URL de ejemplo siguientes

http://localhost:3000/trips/Bogotá
http://localhost:3000/trips


