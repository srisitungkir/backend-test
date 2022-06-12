const sumModel = require("../../storage/models/sum.model");

const sum = async (req, res) => {
    const { a, b } = req.body;
    try {
        const result = await sumModel.sum(a, b);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

module.exports = {
    sum,
};
