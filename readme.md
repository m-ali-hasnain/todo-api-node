# Todo-App API

This is the documentation for the "todo-app" API developed using Node.js and TypeScript. The API follows a layered architecture pattern with Route, Controller, Service, DAO, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Monitoring and Metrics](#monitoring-and-metrics)
- [Linting and Formatting](#linting-and-formatting)
- [Package Manager](#package-manager)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following prerequisites installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-app-api.git
   cd todo-app-api

   ```

2. Build and start the Docker containers:
   docker-compose up -d
   This command will start the Node.js application, MongoDB, Prometheus, and Grafana services.

3. Access the API at
   `http://localhost:5000`

# Usage

The "todo-app" API provides endpoints for managing todo items. Here's a quick overview of the available API endpoints:

GET /api/todos: Get a list of all todo items.
GET /api/todos/:id: Get a specific todo item by ID.
POST /api/todos: Create a new todo item.
PUT /api/todos/:id: Update a todo item by ID.
DELETE /api/todos/:id: Delete a todo item by ID.
GET /metrics: Get metrics data

## Monitoring and Metrics

The API is configured for monitoring and metric collection using Prometheus and Grafana. You can access the Prometheus dashboard at http://localhost:9090 and the Grafana dashboard at http://localhost:3000.

## Linting and Formatting

This project uses ESLint and Prettier for code linting and formatting. You can run linting checks with the following command:

```bash
yarn lint
```

This project uses Yarn as the package manager. To install or update project dependencies, use:

```bash
yarn install
```

## Contributing

Contributions are welcome! Please follow the contribution guidelines to get started.

## License

This project is licensed under the MIT License.
