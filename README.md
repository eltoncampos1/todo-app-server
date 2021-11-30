<br />
<p align="center">

  <h3 align="center">Todo App</h3>

  <p align="center">
    <br />
    <a href="https://github.com/eltoncampos1/todo-app-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/eltoncampos1/todo-app-server">View Demo</a>
    ·
    <a href="hhttps://github.com/eltoncampos1/todo-app-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/eltoncampos1/todo-app-server/pulls">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Api created for nodeJS study purposes, it is a Todo App, in which the user can create, list, update and delete his tasks.

### Built With

- [NodeJS](https://nodejs.dev/)
- [Typescript](https://www.typescriptlang.org)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Typeorm](https://typeorm.io/#/)

<!-- GETTING STARTED -->

## Getting Started

<br/>

<br/>

### Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com)

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/eltoncampos1/todo-app-server.git
   ```

2. cd `API_NAME`

   ```sh
       cd `API_NAME`
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

4. On root project, run docker-compose command

   ```sh
       docker-compose up
   ```

- The base localhost port is **_3333_**, but you can edit in server.ts, and don't forget to update the docker files to expose the new port

<br/>

## Usage

<br/>

- Create an Todo:

  - POST: `http://localhost:${url}/create`

<br/>

- BODY

```json
{
  "content": "Todo content"
}
```

<br>

- Update an Todo:

  - PATCH: `http://localhost:${url}/update/${todoId}`

    <br/>

- BODY

```json
{
  "content": "New Todo content",
  "isComplete": true
}
```

<br/>

- Delete an todo:
  - DELETE: `http://localhost:${url}/delete/${todoId}`

<br/>

- List all todos:

  - GET: `http://localhost:${url}/list`

<br/>

- RESPONSE

```json
[
  {
    "id": "todo_id",
    "content": "todo",
    "isComplete": false,
    "created_at": "timestamp",
    "updated_at": null
  },
  {
    "id": "todo_id",
    "content": "todo",
    "isComplete": false,
    "created_at": "timestamp",
    "updated_at": null
  }
]
```

## Roadmap

See the [open issues](https://github.com/eltoncampos1/todo-app-server/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [TODO APP](https://github.com/eltoncampos1/todo-app-server)

- [LinkedIn](https://www.linkedin.com/in/elton-campos-074015164/)
- [Email](mailto:eltoncampos36@gmail.com)
