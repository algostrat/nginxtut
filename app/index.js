const app = require("express")();

app.get("/", (req, res) => res.send("hello from my container"));

app.listen(9999, () => console.log("Listening on 9999"));
