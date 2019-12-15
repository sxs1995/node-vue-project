const express = require("express");
const app = express();
const port = 3000;

app.use(require("cors")());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

require("./plugins/db")(app);
require("./routes/admin")(app);

app.listen(port, () => console.log(`Example app listening on port port!`));
