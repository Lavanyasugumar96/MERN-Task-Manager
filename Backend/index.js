
const taskModel = require("./models/task.model");


const TaskService = require("./services/task.service");
const taskRoutes = require("./routes/task.routes");


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082;
const DB_URI = "mongodb://localhost:27017/task-manager"


mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,

})
.then(() => console.log("DB Connected!"))
.catch((error) =>console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Backend listening on Port ${PORT}!`);
});