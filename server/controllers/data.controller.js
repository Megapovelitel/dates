const getRandom = () => {
  return Math.floor(Math.random() * 101);
};

const getDatesBetweenDates = ({ from, to }) => {
  const start = new Date(from);
  const end = new Date(to);

  const dates = [];

  while (start <= end) {
    dates.push({
      date: new Date(start).toISOString().substring(0, 10),
      value: getRandom(),
      value2: getRandom()
    });
    start.setDate(start.getDate() + 1);
  }
  return dates;
};

exports.generateData = (req, res) => {
  const data = getDatesBetweenDates(req.query);
  res.status(200).send(data);
};
