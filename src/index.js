require("dotenv").config();
const path = require("path")
const express = require("express");
const cors = require ("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.static(path.join (__dirname, '../', "public")));
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended : false 
}));
app.use(express.json());

app.get ('/', (req, res) =>{
    
    res.status(200).json({
        msg: "Hellow world",
    });
});

app.use((req, res, next)=>{
    const error = new Error ("404 page not found.");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    
    if (error.status == 404){
        return res.status(404).json({
            msg : error.message,
            status : 404,
        });
    };

    return res.status(500).json({
        mes: "Internal Server Error",
        status: 500,
    });
});


app.listen(8080, () =>{
    console.log("Server Listening on port 8080");
})