const express = require("express");
const app = express()
var cors = require("cors")
var bodyParser = require("body-parser")

const PORT = process.env.PORT || 8082;
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
app.use(express.json())
app.use(urlencodedParser)

const userRoutes = require('./app/routes/userRoutes.js')

app.get("/", (req, res) => {
  res.json({ message: "Welcome to praveen application." });
});

app.use('/user/api', userRoutes);

app.get('*',(req,res)=>{
	res.send("404! Page Not Found....");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});