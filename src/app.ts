import "express-async-errors";
import express, { Application } from "express";
import userRoutes from "./routes/user.routes";
import cors from "cors";
import handleError from "./middleware/handleError.middleware";
import sessionRoutes from "./routes/session.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/session", sessionRoutes);

app.use(handleError);

export default app;
