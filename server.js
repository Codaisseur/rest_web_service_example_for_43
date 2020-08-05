const express = require("express");
const app = express();
const treeRouter = require("./routers/treeRouter")
const userRouter = require("./routers/userRouter")
const loggingMiddleWare = require("./middleware/logging")

app.use(express.json()); 
app.use(loggingMiddleWare) 

app.use(treeRouter)
app.use("/user" ,userRouter)

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server started at port ${PORT}!`);
});
