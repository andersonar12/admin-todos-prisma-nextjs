#Development

Pasos para levantar la app en desarrollo

\*Levantar la base de datos

1. Instalar la extensión Remote - Containers:

Abre Visual Studio Code.
Busca la extensión "Remote - Containers" en el Marketplace.
Instala la extensión.

2. Abrir la carpeta del proyecto:

Abre la carpeta que contiene tu archivo docker-compose.yml en Visual Studio Code.

3. Iniciar los contenedores:

Haz clic derecho en el archivo docker-compose.yml.
Selecciona la opción "Compose Up".

4.  Ver los logs:

Abre la vista "Terminal".
Selecciona el panel "Docker".
Podrás ver los logs de los contenedores en ejecución.

Opciones adicionales:

Puedes usar el comando docker-compose up desde la paleta de comandos de Visual Studio Code para iniciar los contenedores.
Puedes usar el comando docker-compose down para detener los contenedores.
Puedes usar el comando docker-compose ps para ver el estado de los contenedores.
Puedes usar la extensión "Docker" para ver una vista gráfica de los contenedores en ejecución.

#Prisma Commands

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

#Renombrar el .env.template a .env

#Reemplazar las variables de entorno

#Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

#Prisma Commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
