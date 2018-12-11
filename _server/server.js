const path = require("path");
const express = require("express");
const router = require("./routes");
const mongoose = require("mongoose");
const session = require("express-session");
const sessionStore = require("connect-mongo")(session);

//	Instantiate an App
const app = express();

//  Initialize a DB connection
const db = require("./db/connection");

//  Configure the server
app.use(
	session({
		store: new sessionStore({ mongooseConnection: mongoose.connection }),
		secret: "this is a secret string key",
		resave: false,
		saveUninitialized: true
	})
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "../_client/static/")));
app.get("/favicon.png", (req, res) => {
	//@TODO: serve a proper file
	res
		.type("png")
		.status(404)
		.send();
});
app.use("/", router);
app.use((err, req, res, next) => {
	res.status(500).json({ error: { message: err } });
});

module.exports = app;
