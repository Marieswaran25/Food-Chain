# Switching Over to the postgres Account(user)

> `sudo -i -u postgres`

# connect to particular db

> `psql -d exome`

# Check connection

> `\conninfo`

# quit db connection

> `\q`

# To change passwrd of user

> `\password`

# set up connection configuration in pg_admin

--------------------------------------------------------------------------

# install packages

# tsconfig file important changes to avoid errors

experimentalDecorators: true,
emitDecoratorMetadata: true,
strictPropertyInitialization: false

we can create table by using entities in type orm

# ADD db configurations in Appdatasource in main index.ts file.

Details~ `port,localhost,username,password,`
Entities- `created table configuration`
synchronise-`whenever updated db will be changed`

# initialize Appdatasource

# To run db using typeorm

> `npm run dev`
 Watch all .ts file and execute src/index.ts with dependancy ts-node
