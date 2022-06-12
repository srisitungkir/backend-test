const is21CenturyModel = require("../../storage/models/is21Century.model");

const is21Century = async (req, res) => {
  try {
    const result = await is21CenturyModel.is21Century();
    res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    res.json({
      data: null,
      error: e.message,
    });
  } finally {
    res.end();
  }
};

module.exports = {
  is21Century,
};
