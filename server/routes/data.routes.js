const controller = require("../controllers/data.controller");
const verify  = require("../middleware/verifyData");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/data/", [verify.verifyData], controller.generateData);
};
