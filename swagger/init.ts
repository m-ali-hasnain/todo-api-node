export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description:
        'A sample Todo API that follows Architectural Design of Controllers, Models, Routes, Services and DAO. It also makes use of Prometheus and Grafana for metrics collection and monitoring. And API is documented using Swagger',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.ts'],
};
