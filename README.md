### Setup

Build the images with the following commands:

```bash
$ docker-compose build server
$ docker-compose build client
```

Install the dependencies with the following commands:

```bash
$ docker-compose run --rm server npm install
$ docker-compose run --rm client npm install
```

### Starting the Docker Containers

```bash
$ docker-compose up
```

### Stopping the Docker Container

```bash
$ docker-compose down
```

### Start Bash Shell inside a running container

```bash
$ docker-compose exec server /bin/bash
```
