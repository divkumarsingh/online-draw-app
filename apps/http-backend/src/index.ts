import express from "express";

const app = express();


app.post("/signup", (req, res) =>{

    res.send("hi its signup endpoint");
})

app.get("/signin", (req, res) => {


    res.send("signin endpoint")
});

app.get("/create-room", (req, res)=>{

    res.send("create room endpoint")
})
app.listen(3001);