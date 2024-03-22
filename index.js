const express = require('express');
const addUser = require('./Routes/AddUser')
const loginUser = require('./Routes/Login')
const app = express();
const PORT_NO = 7000;
app.use(express.json())
app.use("/signup", addUser);
app.use("/login", loginUser);

app.listen(PORT_NO, ()=> {
    console.log(`Server is running on port ${PORT_NO}`);
})
