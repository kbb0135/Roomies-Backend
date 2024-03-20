const express = require('express');
const app = express();
const PORT_NO = 7000;
app.listen(PORT_NO, ()=> {
    console.log(`Server is running on port ${PORT_NO}`);
})
