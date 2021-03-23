const isDate = (date) => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};

verifyData = (req, res, next) => {
  if (!req.query.from || !req.query.to) {
    res.status(400).send("data required");
  }

  if (!(isDate(req.query.from) && isDate(req.query.to))) {
    res.status(400).send("data should be dates");
  }
  
  next();
};



const verify = {
  verifyData: verifyData,
};

module.exports = verify;