import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));

app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Litening on http://localhost:${port}`);

app.listen(port, handleListen);
