"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_route_1 = __importDefault(require("./routes/users_route"));
console.log('big chesse');
const app = (0, express_1.default)();
// const passport = require("passport"),
// LocalStrategy = require('passport-local').Strategy;
// require('./config/passport.js')(passport);
// app.use(passport.initialize());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use((0, cors_1.default)());
// app.use(express.static(path.join(__dirname, 'public')));
//User route used for AUTH
app.use("/api/user/", users_route_1.default);
//Error handling for non existing API requests
app.get("*", function (req, res) {
    res.status(404).send("404");
});
app.listen(3000, () => {
    console.log("App listening on port 3000");
});
