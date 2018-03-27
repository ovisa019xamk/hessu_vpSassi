const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const fs = require("fs");

const port = process.env.PORT || 8000;

const file = "./data/data.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : true}));
app.use(express.static("./public"));

app.post("/api/", (req, res) => {

    if (JSON.parse(req.body.data)) {

        let data = JSON.parse(req.body.data);

        fs.writeFile(file, JSON.stringify(data, null, 2), "utf8", (err, data) => {

            if (!err) {
                res.set("Content-Type", "application/json");
                res.send('{ "status" : "ok" }');
            }        
    
        });

    }

});


app.get("/api/", (req, res) => {

    fs.readFile(file, "utf8", (err, data) => {

        if (!err) {
            res.set("Content-Type", "application/json");
            res.send(data);
        }        

    });

});

app.listen(port, () => {

    console.log(`Palvelin käynnistyi porttiin: ${port}`);

});
