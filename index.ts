import express, {Express, Request, Response } from "express";
import router from "./routes/games.router";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
