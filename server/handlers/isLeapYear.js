const isLeapYearModel = require("../../storage/models/isLeapYear.model");

const isLeapYear = async (req, res) => {
  const result = await isLeapYearModel.isLeapYear();
  res.json({
    data: result,
    error: null,
  });
};

module.exports = {
  isLeapYear,
};
