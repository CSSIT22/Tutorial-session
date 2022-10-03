# Tutorial session 01

### Topics

- Project structure
- Express
- Typescript
- Prisma

#### Project structure

In the real project, there will be a folder called ```modules``` under the folder ```src``` and there will be a lot of folder according to the name of each module.

In each module there will be ```index.ts``` file and ```routes``` folder.

The ```index.ts``` file will control the routing of each module under the module name

for eaxmple:

 module user has route ```/register``` , the module will be route as ```localhost:8000/user/register```

*** Noted that each module will only work inside their folder, Do not interfered  with others module  ***



#### Express & Typescript

We will use express and typescript to work with our project.

I already setup everything for you so you have only **3 steps** to work on.

1. ```npm install```
2. copy ``` .env ``` file, provided in MS Team to the root folder of this project.
3. ```npm run db:gen```

You can try running this project by ``` npm start ```



#### Prisma

In each ```routes``` folder there are an example of using Prisma as an ORM of our database.

except for ```registerBook.ts``` and ```addBookTag.ts``` which I only provided the logic so you can try by yourself.