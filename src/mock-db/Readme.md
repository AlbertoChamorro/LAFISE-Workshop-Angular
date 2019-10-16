# 1) Via npm utiliza el comando

`json-server --watch db.json --port 9000`

## previamente deberias correr

`npm i -g json-server`

## para ocupar el watch en windows deberias pasar la ruta absoluta del archivo para evitar comportamientos raros, es un bug de libreria :<

# 2) Via npx utiliza el comando

`npx json-server --watch db.json --port 9000`

# Optional disabled cors (pasa los flags)

`npx json-server --watch db.json --port 9000 --no-cors --headers, --nc`

# \* por defecto es el puerto 3000, pero para evitar que choque con el del proxy

`npm run start`

# NOTA: Tambien tienes la alternativa de correr el archivo server.js /mock-db/

`node server.js`, para levantar el servidor con nodeJs, para este caso requerimos de nodeJs instalado.

`npm run start:mock`, mock-db/ y ejecuta el comando indicado.
