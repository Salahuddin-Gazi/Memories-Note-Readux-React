import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import postRoute from "./routes/post.js";
const PORT = process.env.PORT;
const URI = "mongodb+srv://salahuddin:1406Onik@api.62bqp.mongodb.net/memories";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB Connected Yo!");
});

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//Routes
app.get("/", async (req, res) => {
  res.send("DOMO");
});

//News Routes
app.use("/posts", postRoute);

//how to start up the server
// const port = process.env.PORT;

const port = 5000 || PORT;
app.listen(port, () => console.log(`Listening to port ${port}...!`));
