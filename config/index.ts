const PORT: number | string = process.env.PORT || 5000;
const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/mern-todo";
export { PORT, MONGO_URI };
