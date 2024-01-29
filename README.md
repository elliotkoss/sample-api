# Node Sample API + React + Postgresql

## API Response Times

The intent for this repo is to serve as a clean starting place for building a proper, scalable API.

When you pull this down, run it in a local environment, and test it with Postman, you should see that the response is <100 ms (0.1 seconds), as low as 10ms (0.01 seconds). Granted, that's only a local environment, but as long as you put it in production in a responsible way, you should see low response times, inline with industry-standard low API response time recommendations. 

> Low API response times are essential for real-time applications like online gaming and trading apps. The most preferred API response time for such applications is 0.1 seconds, which can be counted as an immediate response where users won’t feel any interruption.
[Source: Sematext](https://sematext.com/glossary/api-response-time/#:~:text=Low%20API%20response%20times%20are,won't%20feel%20any%20interruption.)

## Local Development

### Start environment

If this is the first time, you should run...

```shell
npm install
```

To get the environment started...

```shell
npm run dev
```

### Environment Variables

#### Server

In development, the backend Node app will pick up variables specified in `.env`.

This file is gitignored, and you can create one with `touch .env` at the root of this repo, or copy the example file with `cp .env.example .env`.

### Postgres

#### Service

Start a postgres service with Docker:

```shell
docker compose up postgres
```

Find name of service with Docker:

```shell
docker ps
```

Close the postgres service with Docker:

```shell
docker stop [serviceName]
```

Shut down and delete the postgres service with Docker:

```shell
docker compose down
```

Connect to the database:

```shell
psql postgres://postgres:password@0.0.0.0/sample_api
```

Example version and prompt:

```
psql (14.2, server 14.3 (Debian 14.3-1.pgdg110+1))
Type "help" for help.

sample_api=#
```

#### Schema

##### Create Tables

The tables will have been created when the docker service starts.

See `database/init-db.sh` for `CREATE TABLE` commands.

##### Describe Tables

```
sample_api=# \d sample_users
```

#### Test DB Connection from Application

Assuming that the rest of the app dependencies are installed and configured, confirm that the application can connect to your postgres database.  You should see `Database connection OK!` in the logs upon start, otherwise the server will have failed to start (i.e., a successful connection to the Postgres DB is a pre-requisite for the app).


```shell
npm run dev

> Sample API@0.1.0 server
> nodemon index.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Checking database connection...
Database connection OK!
Starting app on port 3001...
app listening on port 3001.
```