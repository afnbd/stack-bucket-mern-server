const express = require("express");
const cors = require ("cors");
const morgan = requre("morgan");

const app = express();
app.get ('/', (req, res) =>{
    res.status(200).json({
        msg: "Hellow world",
    });
});

app.listen(8080, () =>{
    console.log("Server Listening on port 8080");
})