import express from "express";
import cors from "cors";
const app = express();

//basic middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

//cors middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);





export default app;