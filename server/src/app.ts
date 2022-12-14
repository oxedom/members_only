import express from "express";
import cors from "cors";
import user_routes from "./routes/users_route";

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));

// User route used for AUTH
app.use("/api/user/", user_routes);

// Error handling for non existing API requests
app.get("*", function (req, res) {
    res.status(404).send("404");
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});
