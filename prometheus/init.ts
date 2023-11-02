import client from "prom-client";

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

// Registering custom metrics

export const reqResTime = new client.Histogram({
  name: "req_res_time",
  help: "Request response time",
  labelNames: ["method", "route", "code"],
  buckets: [0.1, 5, 15, 50, 100, 500],
});

export const totalRequests = new client.Counter({
  name: "Total_Requests",
  help: "Total number of requests made",
});

export default client;
