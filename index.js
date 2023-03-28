import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.status(200).json("Congratulations!, you are ready to commit your first changes to git repository.")
});

app.listen(5000);