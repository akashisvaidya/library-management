import express from "express";
import morgan from "morgan";
import cors from "cors";
import UserRouter from "./src/router/UserRouter.js";
import { connectDb } from "./src/db_config/DB_Config.js";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 8000;
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//database connection
connectDb();
//routes
app.use("/api/v1/user", UserRouter);

//global error handler
app.use((error, req, res, next) => {
  const statusCode = 404 || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running on http://localhost:${PORT}`);
});
