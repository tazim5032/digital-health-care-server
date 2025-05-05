https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

set "rootDir": "./src",

set "outDir": "./dist",

npm i express
npm i ts-node-dev -D
npm i cors
npm i --save-dev @types/express
npm i --save-dev @types/cors

add this in package.json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "ts-node-dev --respawn --transpile-only src/server.ts"
},




npx prisma migrate dev
init



npx prisma studio


hashing
npm i bcrypt
npm i --save-dev @types/bcrypt
https://www.npmjs.com/package/bcrypt