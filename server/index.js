const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const UserRoute = require("./user/routes.config");
const OfferRoute = require("./offer/routes.config");
const Transactionoute = require("./transaction/routes.config");
//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
UserRoute.routesConfig(app);
Transactionoute.routesConfig(app);
OfferRoute.routesConfig(app);
//

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
