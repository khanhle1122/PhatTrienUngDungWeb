const express = require("express");
const cors = require ("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();
const ApiError = require("./app/api-error");
const app = express();

app.use("/api/contacts",contactsRouter);
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.use("/api/contacts", contactsRouter);
app.get("/",(req,res)=>{
	res.json({message:"Welcome to contactbook application."});
});

module.exports = app;

